import molecule from 'mo';
import { IExtension } from 'mo/model/extension';
import { ITreeNodeItemProps } from 'mo/components/tree';
import { FileTypes, TreeNodeModel } from 'mo/model';
import { randomId } from 'mo/common/utils';

export const ExtendsFolderTree: IExtension = {
    activate() {
        molecule.folderTree.onNewFile((id: number) => {
            // work through addNode function
            molecule.folderTree.addNode(
                id,
                new TreeNodeModel({
                    id: randomId(),
                    name: '',
                    fileType: FileTypes.File,
                    isEditable: true,
                })
            );
        });

        molecule.folderTree.onNewFolder((id: number) => {
            // work through addNode function
            molecule.folderTree.addNode(
                id,
                new TreeNodeModel({
                    id: randomId(),
                    name: '',
                    fileType: FileTypes.Folder,
                    isEditable: true,
                })
            );
        });

        molecule.folderTree.onNewRootFolder((id: number) => {
            molecule.folderTree.addRootFolder?.(
                new TreeNodeModel({
                    id,
                    name: 'molecule',
                    fileType: FileTypes.RootFolder,
                })
            );
        });

        molecule.folderTree.onDelete((id: number) => {
            const { folderTree } = molecule.folderTree.getState();
            const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
            const {
                tree,
                index,
            } = molecule.folderTree.getCurrentRootFolderInfo(id);
            tree.remove(id);
            if (index > -1) cloneData[index] = tree.obj;
            molecule.folderTree.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });

        molecule.folderTree.onRename((id: number) => {
            const { folderTree } = molecule.folderTree.getState();
            const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
            const {
                tree,
                index,
            } = molecule.folderTree.getCurrentRootFolderInfo(id);
            tree.update(id, {
                isEditable: true,
            });
            if (index > -1) cloneData[index] = tree.obj;
            molecule.folderTree.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
        });

        molecule.folderTree.onSelectFile(
            (file: ITreeNodeItemProps, isUpdate?: boolean) => {
                const { fileType, isEditable } = file;
                const isFile = fileType === FileTypes.File;
                molecule.folderTree.setActive(file?.id);
                if (!isFile || isEditable) return;
                const tabData = {
                    ...file,
                    id: `${file.id}`?.split('_')?.[0],
                    modified: false,
                    data: {
                        value: file.content,
                        path: 'desktop/moslecule/editor1',
                        language: 'sql',
                    },
                };

                const { id, data = [] } =
                    molecule.editor.getState()?.current || ({} as any);
                if (isUpdate) {
                    const tabId = file.id;
                    const index = data?.findIndex((tab) => tab.id == tabId);
                    if (index > -1) {
                        if (id) molecule.editor.updateTab(tabData, id);
                    } else {
                        molecule.editor.open(tabData);
                    }
                } else {
                    molecule.editor.open(tabData);
                }
            }
        );

        molecule.folderTree.onUpdateFileName((file: ITreeNodeItemProps) => {
            const { folderTree } = molecule.folderTree.getState();
            const { id, name, fileType } = file as any;
            const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
            const {
                tree,
                index,
            } = molecule.folderTree.getCurrentRootFolderInfo(id);
            if (name) {
                tree.update(id, {
                    ...file,
                    icon: molecule.folderTree.getFileIconByExtensionName(
                        name,
                        fileType
                    ),
                    isEditable: false,
                });
            } else {
                tree.remove(id);
            }
            if (index > -1) cloneData[index] = tree.obj;
            molecule.folderTree.setState({
                folderTree: { ...folderTree, data: cloneData },
            });
            if (file?.fileType === FileTypes.File && file.name) {
                // emit onSelectFile
            }
        });

        molecule.folderTree.onUpdateFileContent(
            (id: number, value?: string) => {
                const { folderTree } = molecule.folderTree.getState();
                const cloneData: ITreeNodeItemProps[] = folderTree?.data || [];
                const {
                    tree,
                    index,
                } = molecule.folderTree.getCurrentRootFolderInfo(id);
                tree.update(id, {
                    content: value,
                });
                if (index > -1) cloneData[index] = tree.obj;
                molecule.folderTree.setState({
                    folderTree: { ...folderTree, data: cloneData },
                });
            }
        );
    },
};

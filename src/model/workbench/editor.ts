import 'reflect-metadata';
import { EventBus } from 'mo/common/event';
import { observable } from 'mo/common/observable';
import { ITab } from 'mo/components/tabs/tab';
import { container, inject, injectable } from 'tsyringe';

export enum EditorEvent {
    OnCloseTab = 'editor.closeTab',
    OnMoveTab = 'editor.moveTab',
    OpenTab = 'editor.openTab',
    OnSelectTab = 'editor.selectTab',
}
export interface IEditor<T> {
    current: IEditorGroup | undefined;
    groups: IEditorGroup[];
    closeAll?: () => void;
    onCloseTab?: (tabKey?: string, group?: number) => void;
    render?: () => React.ReactNode;
    onMoveTab?: (tabs: ITab<T>[], group?: number) => void;
    onSelectTab?: (tabKey: string, group?: number) => void;
}

export interface IEditorGroup<E = any, T = any> {
    id: number;
    activeTab: ITab<T>;
    tabs: ITab<T>[];
    breadcrumb: any[];
    actions: any[];
    menu: any[];
    editorInstance?: E | null;
}

export class EditorGroupModel<T> implements IEditorGroup<T> {
    id: number;
    activeTab: ITab<T>;
    tabs: ITab<T>[];
    breadcrumb: any[];
    actions: any[];
    menu: any[];
    editorInstance: any;

    constructor(
        id: number,
        activeTab: ITab<T>,
        tabs: ITab<T>[],
        breadcrumb: any[] = [],
        actions: any[] = [],
        menu: any[] = [],
        editorInstance?: any
    ) {
        this.id = id;
        this.tabs = tabs;
        this.menu = menu;
        this.actions = actions;
        this.activeTab = activeTab;
        this.breadcrumb = breadcrumb;
        this.editorInstance = editorInstance;
    }
}

@observable()
@injectable()
export class EditorModel<T> implements IEditor<T> {
    public current: IEditorGroup | undefined;
    public groups!: IEditorGroup[];

    constructor(
        @inject('CurrentEditorGroup') current?: IEditorGroup,
        @inject('EditorGroup') groups: IEditorGroup[] = []
    ) {
        this.current = current;
        this.groups = groups;
    }
    closeAll?: (() => void) | undefined;

    public render!: () => React.ReactNode;

    public readonly onSelectTab = (tabKey: string, groupId?: number) => {
        EventBus.emit(EditorEvent.OnSelectTab, tabKey, groupId);
    };
    public readonly onMoveTab = (updateTabs: ITab<T>[], groupId?: number) => {
        EventBus.emit(EditorEvent.OnMoveTab, updateTabs, groupId);
    };
    public readonly onCloseTab = (tabKey?: string, groupId?: number) => {
        EventBus.emit(EditorEvent.OnCloseTab, tabKey, groupId);
    };
}

container.register('CurrentEditorGroup', { useValue: '' });
container.register('EditorGroup', { useValue: [] });

import BadgeComponent from './Accessories/Badge.vue';
import DeleteButtonHandleComponent from './Accessories/DeleteButtonHandle.vue';
import StatItemWithIconComponent from "./Accessories/StatItemWithIcon.vue";
import BackButtonComponent from "./Navigation/Breadcrumb/BackButton.vue";
import { useSaveShortcut as useSaveShortcutAction, useSwitchLanguageShortcut as useSwitchLanguageShortcutAction } from "./Mixins/UseShortcuts.js";

// ------------------------------------
// Accessories
// ------------------------------------
import MetaInfoComponent from "./Accessories/MetaInfo.vue";
import SectionBorderComponent from "./Accessories/SectionBorder.vue";
import DragHandleComponent from "./Accessories/DragHandle.vue";

export const SectionBorder = SectionBorderComponent;
export const Badge = BadgeComponent;
export const DeleteButtonHandle = DeleteButtonHandleComponent;
export const StatItemWithIcon = StatItemWithIconComponent;
export const MetaInfo = MetaInfoComponent;
export const DragHandle = DragHandleComponent;

// ------------------------------------
// Navigation
// ------------------------------------

import PaginationButtonGroupComponent from "./Navigation/PaginationButtonGroup.vue";
import PageButtonFooterComponent from "./Navigation/PageButtonFooter.vue";

export const PaginationButtonGroup = PaginationButtonGroupComponent;
export const PageButtonFooter = PageButtonFooterComponent;

// ------------------------------------
// Table
// ------------------------------------

import DataTableComponent from './Table/DataTable.vue';
import HeadingComponent from './Table/Heading.vue';
import RowComponent from './Table/Row.vue';
import CellComponent from './Table/Cell.vue';
import SelectInputComponent from './Input/SelectInput.vue';
import TextInputComponent from './Input/TextInput.vue';

import DangerModalComponent from './Modals/DangerModal.vue';

export const SelectInput = SelectInputComponent;
export const TextInput = TextInputComponent;

export const BackButton = BackButtonComponent;

export const useSaveShortcut = useSaveShortcutAction;
export const useSwitchLanguageShortcut = useSwitchLanguageShortcutAction;

export const DataTable = DataTableComponent;
export const Heading = HeadingComponent;
export const Row = RowComponent;
export const Cell = CellComponent;

export const DangerModal = DangerModalComponent;

import Vue from "vue";

// modal
import NormalStyleModal from "@/components/modal/NormalStyleModal";
import CreateTaskModal from "@/components/modal/CreateTaskModal";

// others
import Tasks from "@/components/Tasks";
import DetailTask from "@/components/DetailTask";
import Timetable from "@/components/Timetable";
import NormalStyleTextField from "@/components/NormalStyleTextField";



let views = [
    NormalStyleModal,
    CreateTaskModal,
    Tasks,
    DetailTask,
    Timetable,
    NormalStyleTextField,
];

views.forEach((view) => {
    Vue.component(view.name, view);
});
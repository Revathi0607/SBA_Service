(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nheader h1 { text-align: center; font-weight: bold; padding: 10px 0px; font-size: 20px; }\n.container .form-group { min-height: 35px; }\n.container .form-group label { width: 30%; float: left;\n\tpadding-top: 10px; }\n.container .form-group input, .container .date, .container .form-group select { width: 70%; float: left; }\n.container .date input  { width: 100%; float: none; }\n.tab-pane { border: 1px solid #ddd; border-radius:0px 0px 5px 5px; border-top:0; padding: 15px 0px; }\n.nav.nav-tabs .active { font-weight: bold; }\n.nav.nav-tabs a { border: 1px solid #ddd; margin-right: 7px; }\n.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover { background: #ddd; border: 1px solid #ddd;\n\tcolor: #333; }\n.form-slider { width: 70%; float: left; margin-top: 8px; }\n.form-slider b { float: left; width: 20px; display: inline-block; margin-right: 10px;padding-top: 3px; }\n.form-slider input + b { float: left; width: 20px; display: inline-block; margin-left:10px; margin-right: 0; }\n.form-slider .slider.slider-horizontal { width: calc(100% - 60px); float: left; }\n.slider-track-low, .slider-track-high { background: #969696; }\n.btn-secondary { color: #fff; background-color: #6c757d;  border-color: #6c757d; }\n.btn-secondary:hover { color: #fff; background-color: #5a6268; border-color: #545b62; }\n.form-btns { text-align: center; }\n.form-btns button { margin-right: 10px; width: 100px; }\n.task-table { width: 95%; margin: 0 auto; }\n.task-table table thead th { color: #fff; background: #274c65; border-color: #ddd; text-align: center; }\n.task-table table thead th:first-child { border-left: 0; }\n.task-table table thead th:last-child { }\n.table-bordered { border: 0; margin-bottom: 0; }\n.task-table .table>tbody>tr>td { vertical-align: middle; }\n.task-table .table>tbody>tr>td:last-child { text-align: center; }\n.task-table .table>tbody>tr>td:last-child button { margin-right: 10px; }\nfooter { padding: 10px 0px; }\n.frst-label{width:16% !important;}\n.adduser-cont { border: 1px solid #ddd; border-radius:5px; padding: 15px;margin-top: 15px; }\n.adduser-cont .row{ margin:15px 0px 0px 0px; border-bottom:1px dashed #2e6da4;padding-bottom: 10px;}\n.adduser-cont .form-group input{width:100% !important;}\n.adduser-cont .col-sm-2 {width: 10.666667%;padding-right:0px;}\n.adduser-cont .col-sm-10 {width: 85.333333%;padding: 10px;background: #ddd;margin-right:20px;}\n.padding-0{padding:0px}\n.padding-r-0{padding-right:0px;}\n.adduser-cont .form-btns button{ margin-right: 0px !important;float: right !important;}\n.adduser-heading .form-btns button{ margin-right: 8px !important;float: left !important;}\n.adduser-heading label{width:14% !important}\n.adduser-heading .left-count{width:70% !important}\n.addprjct-datepicker{margin-bottom: 15px;}\n.addprjct-datepicker .datepicker{display: inline-block;width:30%}\n.start-Prjct-data{margin: 0px 6px;}\n.manager-name{width:55% !important;margin-right: 10px;}\n#viewAddProject .adduser-heading label{width:6% !important;text-align: left;}\n.viewProjectList{padding:10px 0px;}\n.progress-bar-vertical {\n\twidth: 50%;\n\tmin-height: 100px;\n\tdisplay: flex;\n\talign-items: flex-end;\n\tmargin-right: 20px;\n\tfloat: left;\n  }\n.progress-bar-vertical .progress-bar {\n\twidth: 100%;\n\theight: 0;\n\ttransition: height 0.6s ease;\n  }\n.addPriority{margin-bottom: 2px;}\n.viewPriority{width: 50%;\n\tmin-height: 89px;}\n.bg-gray{background: #ddd;}\n#viewAddProject .btn-Priority button{margin-bottom: 12px;padding:12px;}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-loading-bar height=\"5px\"></ngx-loading-bar>\n<div class=\"container\">\n\t<div class=\"wrapper\">\n\t\t<header>\n\t\t\t<h1>Project Manager</h1>\n\t\t</header>\n\t\t<section>\n\t\t\t<div class=\"task-manager-page\">\n\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#addProject\" (click)=\"AddProject()\">Add Project</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#addTask\" (click)=\"AddTask()\">Add Task</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#addUser\" (click)=\"AddUser()\">Add User</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a data-toggle=\"tab\" href=\"#viewTask\" (click)=\"ViewTask()\">View Task</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"tab-content\">\n\t\t\t\t\t<div id=\"addProject\" class=\"tab-pane fade in active\">\n\t\t\t\t\t\t<form [formGroup]=\"myProjectForm\" (ngSubmit)=\"onProjectSubmit()\" [class.projectSubmitted]=\"projectSubmitted\">\n\t\t\t\t\t\t\t<div class=\"task-manage-form\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Project:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Project_Name\" name=\"Project_Name\" formControlName=\"Project_Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3 addprjct-datepicker\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"save-info\" (change)=\"onFilterChange()\" required> Set Start Date and End Date\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\" class=\"datepicker form-control start-Prjct-data\" name=\"Start_Date\" formControlName=\"Start_Date\" [attr.disabled]=\"!filter ? '': null\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\" class=\"datepicker form-control\" name=\"End_Date\" formControlName=\"End_Date\" [attr.disabled]=\"!filter ? '' : null\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Priority:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-slider\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<b>0</b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"range\" min=\"0\" max=\"30\" class=\"slider\" step=\"1\" value=\"0\" name=\"Priority_Project\" id=\"rangeIn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t formControlName=\"Priority_Project\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<b>30</b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Manager:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control manager-name\" id=\"Manager_Name\" name=\"selectedManager\" formControlName=\"selectedManager\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"ManagerSearch()\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-btns pull-right text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" ng-disabled=\"myProjectForm.form.valid\">{{ myProjectForm.get('Project_ID').value ? 'Update' : 'Add' }} Project</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"ResetProject()\">Reset</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"adduser-cont\" id=\"viewAddProject\" *ngIf=\"projShow\">\n\t\t\t\t\t\t<div class=\"row adduser-heading\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 \">\n\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Search_By\" [(ngModel)]=\"search.projAllSearch\" name=\"projAllSearch\">\n\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12 form-group form-btns\">\n\t\t\t\t\t\t\t\t<label for=\"\">Sort By:</label>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortProject('Start_Date')\">Start Date</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortProject('End_Date')\">End Date</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortProject('Priority')\">Priority</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortProject('Is_Active')\">Completed</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"listView\">\n\t\t\t\t\t\t\t<div class=\"row\" *ngFor=\"let proj of projDetails | filter : { AllProjectSearch : search.projAllSearch}\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-8 padding-0 bg-gray\">\n\t\t\t\t\t\t\t\t\t<div class=\"viewProjectList\">Project: {{proj.Project}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 padding-0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"viewProjectList\">No. of Task: {{proj.TaskCount}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"viewProjectList\">Start Date: {{proj.Start_Date | date: 'MM/dd/yyyy'}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"viewProjectList\">Completed: {{proj.ProjStatus}}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"viewProjectList\">End Date: {{proj.End_Date | date: 'MM/dd/yyyy'}}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t\t\t<div class=\"addPriority\">Priority : {{proj.Priority}}</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"progress progress-bar-vertical\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"30\" [style.height.%]=\"proj.Active_Progress\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">{{proj.Priority}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"viewPriority bg-gray\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2 form-group form-btns btn-Priority\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"EditProject(proj)\">Update</button>\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"SuspendProject(proj)\">Suspend</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div id=\"addTask\" class=\"tab-pane fade\">\n\t\t\t\t\t\t<form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\" [class.submitted]=\"submitted\">\n\t\t\t\t\t\t\t<div class=\"task-manage-form\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Project:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control manager-name\" id=\"Project_Name\" name=\"Project_Name\" formControlName=\"selectedProject\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"ProjectSearch()\" [disabled]=\"isTaskUpdate\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group parentTaskcheck\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"parentTask\" (change)=\"onParentCheck()\" [disabled]=\"isTaskUpdate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Parent Task</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Task:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" class=\"form-control\" id=\"Task_ID\" name=\"Task_ID\" formControlName=\"Task_ID\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"task\" name=\"Task\" formControlName=\"Task\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Priority:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-slider\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<b>0</b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"range\" min=\"0\" max=\"30\" class=\"slider\" step=\"1\" value=\"0\" id=\"rangeIn\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t name=\"Priority\" formControlName=\"Priority\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<b>30</b>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Parent Task:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control manager-name\" id=\"Parent_Task\" name=\"Parent_Task\" formControlName=\"selectedParentTask\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"ParentSearch()\" [disabled]=\"!filter\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Start date:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group date\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\" class=\"datepicker form-control\" name=\"Start_Date\" formControlName=\"Start_Date\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">End date:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-group date\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"date\" class=\"datepicker form-control\" name=\"End_Date\" formControlName=\"End_Date\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">User:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control manager-name\" id=\"User_Name\" name=\"User_Name\" formControlName=\"selectedUser\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"UserSearch()\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-btns\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" ng-disabled=\"myForm.form.valid\">{{ myForm.get('Task_ID').value ? 'Update' : 'Add' }} Task</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"ResetTask()\">Reset</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"addUser\" class=\"tab-pane fade\">\n\t\t\t\t\t\t<form [formGroup]=\"addUserForm\" (ngSubmit)=\"AddUserSubmit()\" [class.addUserSubmitted]=\"addUserSubmitted\">\n\t\t\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">First Name:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" class=\"form-control\" id=\"First_Name\" name=\"First_Name\" formControlName=\"First_Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"First_Name\" name=\"First_Name\" formControlName=\"First_Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Last Name:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" class=\"form-control\" id=\"Last_Name\" name=\"Last_Name\" formControlName=\"Last_Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Last_Name\" name=\"Last_Name\" formControlName=\"Last_Name\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\">Employee ID:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"hidden\" class=\"form-control\" id=\"Employee_ID\" name=\"Employee_ID\" formControlName=\"Employee_ID\" ng-disabled=\"isUserUpdate\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Employee_ID\" name=\"Employee_ID\" formControlName=\"Employee_ID\" ng-disabled=\"isUserUpdate\"\n\t\t\t\t\t\t\t\t\t\t\t\t onkeydown=\"return (!(event.keyCode>=65) && event.keyCode!=32);\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group form-btns\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" ng-disabled=\"addUserForm.form.valid\">{{ isUserUpdate ? 'Update' : 'Add' }} User</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" (click)=\"AddUserResetTask()\">Reset</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"adduser-cont\" *ngIf=\"userShow\">\n\t\t\t\t\t\t<div class=\"row adduser-heading\">\n\t\t\t\t\t\t\t<div class=\"col-sm-7 padding-0\">\n\t\t\t\t\t\t\t\t<div class=\"form-group \">\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" class=\"form-control\" id=\"Search_By\" name=\"Search_By\">\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"Search_By\" [(ngModel)]=\"search.userSearch\" name=\"userSearch\">\n\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-5 form-group form-btns\">\n\t\t\t\t\t\t\t\t<label for=\"\"> Sort:</label>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortUser('First_Name')\">First Name</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortUser('Last_Name')\">Last Name</button>\n\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortUser('Employee_ID')\">ID</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"listView\">\n\t\t\t\t\t\t\t<div class=\"row\" *ngFor=\"let user of userDetails | filter : { UserNameSearch : search.userSearch}\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10 padding-0\">\n\t\t\t\t\t\t\t\t\t<div>{{user.First_Name}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2 form-group form-btns\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"EditUser(user)\">Edit</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10 padding-0\">\n\t\t\t\t\t\t\t\t\t<div>{{user.Last_Name}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-2 form-group form-btns\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"DeleteUser(user)\">Delete</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-10 padding-0\">\n\t\t\t\t\t\t\t\t\t<div>{{user.Employee_ID}}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div id=\"viewTask\" class=\"tab-pane fade\" *ngIf=\"taskShow\">\n\t\t\t\t\t\t<form [formGroup]=\"viewTaskForm\">\n\t\t\t\t\t\t\t<div class=\"task-manage-form\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\" class=\"frst-label\">Project:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"view-task\" [(ngModel)]=\"search.projSearch\" name=\"projSearch\" formControlName=\"searchedProject\">&nbsp;\n\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"SearchTaskProject()\">Search</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"task\" class=\"frst-label\">Sort Task By:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortTask('Start_Date')\">Start Date</button>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortTask('End_Date')\">End Date</button>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortTask('Priority')\">Priority</button>&nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"sortTask('Is_Active')\">Completed</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"table-responsive task-table\">\n\t\t\t\t\t\t\t\t\t\t\t<table class=\"table table-bordered table-hover\">\n\t\t\t\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"display:none;\">Task</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th style=\"display:none;\">Parent</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Project</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Task</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Parent</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Priority</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Start</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>End</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Action</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let task of pagedItems | filter : { ProjectSearch : search.projSearch}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td align=\"center\" style=\"display:none;\">{{task.Task_ID}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td align=\"center\" style=\"display:none;\">{{task.Parent_ID}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td align=\"center\">{{task.Project_Name}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td align=\"center\">{{task.Task}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td align=\"center\">{{task.Parent_Task}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td align=\"center\">{{task.Priority}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td align=\"center\">{{task.Start_Date | date: 'MM/dd/yyyy'}}</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td align=\"center\">{{task.End_Date | date: 'MM/dd/yyyy'}}</td>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\" (click)=\"EditTask(task)\" [disabled]=\"!task.Is_Active\">Edit</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"EndTask(task)\" [disabled]=\"!task.Is_Active\">End Task</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn btn-primary\" (click)=\"EditTask(task)\">Edit</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"EndTask(task)\">End Task</button> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"7\">\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of pagedItems\">{{item.name}}</div>\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"setPage(1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<< </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"setPage(pager.currentPage - 1)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t< </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{active:pager.currentPage === page}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a>{{pager.currentPage}}</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"setPage(pager.currentPage + 1)\"> > </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"setPage(pager.totalPages)\"> >> </a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t\t\t\t</table>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</section>\n\t</div>\n\n\t<div class=\"modal fade\" id=\"managerModal\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<!-- Modal content-->\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">Manager List</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"searchManager\" [(ngModel)]=\"search.radioMgrSearch\" name=\"radioMgrSearch\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"modal-body\" *ngFor=\"let manager of managerDetails | filter : { radioManagerSearch : search.radioMgrSearch}\">\n\t\t\t\t\t<label class=\"modContainer\">{{manager.Manager_ID}}\n\t\t\t\t\t\t<input type=\"radio\" name=\"radio\" [(ngModel)]=\"selectedManager\" [value]=\"manager.Manager_ID\" />\n\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"modal fade\" id=\"projNameModal\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<!-- Modal content-->\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">Project List</h4>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"searchProject\" [(ngModel)]=\"search.radioTaskProjSearch\" name=\"radioTaskProjSearch\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"modal-body\" *ngFor=\"let proj of projectNameList| filter : { radioTaskProjectSearch : search.radioTaskProjSearch}\">\n\t\t\t\t\t<label class=\"modContainer\">{{proj.Project}}\n\t\t\t\t\t\t<input  type=\"radio\" name=\"radio2\" [(ngModel)]=\"selectedProject\" [id]=\"'proj_' +i\" [value]=\"proj.Project_ID\">\n\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\n\t<div class=\"modal fade\" id=\"parentTaskModal\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<!-- Modal content-->\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">Parent Task List</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"searchParentSearch\" [(ngModel)]=\"search.radioParentSearch\" name=\"radioParentSearch\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\" *ngFor=\"let parent of parentTaskList | filter : { radioParentTaskSearch : search.radioParentSearch}\">\n\t\t\t\t\t<label class=\"modContainer\">{{parent.Parent_Task}}\n\t\t\t\t\t\t<input type=\"radio\" name=\"radio3\" [(ngModel)]=\"selectedParentTask\" [value]=\"parent.Parent_ID\">\n\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"modal fade\" id=\"userModal\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<!-- Modal content-->\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">User List</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"searchUserSearch\" [(ngModel)]=\"search.radioUserSearch\" name=\"radioUserSearch\">\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\" *ngFor=\"let user of userDetails | filter : { radioUserTaskSearch : search.radioUserSearch}\">\n\t\t\t\t\t<label class=\"modContainer\">{{user.First_Name}}, {{user.Last_Name}}\n\t\t\t\t\t\t<input type=\"radio\" name=\"radio4\" [(ngModel)]=\"selectedUser\" [id]=\"'user_'+i\" [value]=\"user.User_ID\">\n\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\t<div class=\"modal fade\" id=\"taskProjectModal\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<!-- Modal content-->\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">Project List</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"searchProject\" [(ngModel)]=\"search.radioProjSearch\" name=\"radioProjSearch\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"modal-body\" *ngFor=\"let project of projectNameList | filter : { radioProjectSearch : search.radioProjSearch}\">\n\t\t\t\t\t<label class=\"modContainer\">{{project.Project}}\n\t\t\t\t\t\t<input type=\"radio\" name=\"radio5\" [(ngModel)]=\"searchedProject\" [id]=\"'project_'+i\" [value]=\"project.Project\">\n\t\t\t\t\t\t<span class=\"checkmark\"></span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">OK</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\t<div class=\"modal fade\" id=\"deleteModal\" role=\"dialog\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<!-- Modal content-->\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div class=\"modal-header\">\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t\t<h4 class=\"modal-title\">Delete confirm</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body\">\n\t\t\t\t\t<label class=\"modContainer\">\n\t\t\t\t\t\tUser may have task(s), deleting the user it delete the task associated to.\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"modContainer\">\n\t\t\t\t\t\tAre you sure want to delete?\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"ConfirmDeleteUser()\">OK</button>\n\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\n\t<footer>\n\t\tCopyright &copy; 2018\n\t</footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/common-service.service */ "./src/app/services/common-service.service.ts");
/* harmony import */ var _services_pageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/pageService */ "./src/app/services/pageService.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(appServices, pageService, fb, orderPipe) {
        this.appServices = appServices;
        this.pageService = pageService;
        this.fb = fb;
        this.orderPipe = orderPipe;
        this.title = 'Project-Manager';
        this.taskDetails = [];
        this.userDetails = [];
        this.projDetails = [];
        this.managerDetails = [];
        this.projectNameList = [];
        this.pager = {};
        this.pagedItems = [];
        this.search = {
            projSearch: '',
            userSearch: ''
        };
        this.deleteUserValue = [];
        this.key = ''; //set default
        this.reverse = false;
        this.submitted = false;
        this.addUserSubmitted = false;
        this.projectSubmitted = false;
        this.projShow = true;
        this.userShow = false;
        this.taskShow = false;
        this.orderBy = false;
        this.isUserUpdate = false;
        this.filter = false;
        this.Start_Date = new Date();
        this.selectedManager = '';
        this.selectedProject = '';
        this.selectedParentTask = '';
        this.selectedUser = '';
        this.searchedProject = '';
        this.isTaskUpdate = false;
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.ngAfterContentInit = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        // Common Code 
        var _this = this;
        this.callAllMethods();
        // Code for Project screen
        this.myProjectForm = this.fb.group({
            Project_ID: 0,
            Project_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Priority_Project: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Start_Date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            End_Date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Employee_ID: [''],
            Manager_Name: [''],
            Project: [''],
            Priority: 0,
            Manager_ID: [''],
            Status: 0,
            TaskCount: 0,
            Action: '',
            Is_Active: 1,
            ProjStatus: [''],
            selectedManager: [{ disabled: true, value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Active_Progress: ['']
        });
        // Code for Task screen
        this.myForm = this.fb.group({
            Task_ID: 0,
            Task: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Priority: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Parent_ID: [''],
            Parent_Task: [''],
            Start_Date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            End_Date: [''],
            Is_Active: 0,
            IsActive: 0,
            Project_ID: 0,
            Status: 0,
            Action: [''],
            User_ID: [''],
            selectedProject: [{ disabled: true, value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedParentTask: [{ disabled: true, value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedUser: [{ disabled: true, value: '' }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Project_Name: [''],
        });
        // Code for User screen  
        this.addUserForm = this.fb.group({
            First_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Last_Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            User_ID: 0,
            Employee_ID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Project_ID: '',
            Task_ID: ''
        });
        this.viewTaskForm = this.fb.group({
            searchedProject: [{ disabled: true, value: '' }]
        });
        $('.modal').on('hidden.bs.modal', function (e) {
            if (e.target.id == 'managerModal') {
                _this.myProjectForm.get('selectedManager').setValue(_this.selectedManager);
            }
            ;
            if (e.target.id == 'projNameModal') {
                _this.myForm.get('selectedProject').setValue(_this.selectedProject);
            }
            ;
            if (e.target.id == 'parentTaskModal') {
                _this.myForm.get('selectedParentTask').setValue(_this.selectedParentTask);
            }
            ;
            if (e.target.id == 'userModal') {
                _this.myForm.get('selectedUser').setValue(_this.selectedUser);
            }
            ;
            if (e.target.id == 'taskProjectModal') {
                _this.viewTaskForm.get('searchedProject').setValue(_this.searchedProject);
            }
            ;
        });
    };
    ;
    // Common Code 
    AppComponent.prototype.callAllMethods = function () {
        this.getProjectName();
        this.getProjectDetails();
        this.getTaskManager();
        this.getUserDetails();
        this.getManagerDetails();
        this.getParentDetails();
    };
    ;
    // Code for Project screen
    AppComponent.prototype.getParentDetails = function () {
        var _this = this;
        this.appServices.getParentTask().subscribe(function (data) {
            _this.parentTaskList = data;
        });
    };
    ;
    AppComponent.prototype.getProjectDetails = function () {
        var _this = this;
        this.appServices.getProjectDetails().subscribe(function (data) {
            _this.projDetails = data;
        });
    };
    ;
    AppComponent.prototype.getManagerDetails = function () {
        var _this = this;
        this.appServices.getManagerDetails().subscribe(function (data) {
            _this.managerDetails = data;
        });
    };
    ;
    AppComponent.prototype.getProjectName = function () {
        var _this = this;
        this.appServices.getProjectName().subscribe(function (data) {
            _this.projectNameList = data;
        });
    };
    ;
    AppComponent.prototype.onProjectSubmit = function () {
        var _this = this;
        this.projectSubmitted = true;
        var vMangerName = this.selectedManager;
        if (vMangerName == "") {
            vMangerName = this.myProjectForm.value.Manager_ID;
        }
        if (this.myProjectForm.valid && vMangerName) {
            if (this.compareTwoDates(this.myProjectForm.value)) {
                var VID = this.myProjectForm.value.Project_ID;
                var vProjForm = {
                    Project_ID: VID,
                    Project: this.myProjectForm.value.Project_Name,
                    Start_Date: this.myProjectForm.value.Start_Date,
                    End_Date: this.myProjectForm.value.End_Date,
                    Priority: this.myProjectForm.value.Priority_Project,
                    Manager_ID: vMangerName
                };
                this.appServices.submitProject(vProjForm).subscribe(function (data) {
                    if (data) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Success', "Data " + (VID == 0 ? 'Added' : 'Updated') + " successfully...", 'success');
                        _this.myProjectForm.reset();
                        _this.projectSubmitted = false;
                        _this.callAllMethods();
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Failed', 'Please try again..', 'error');
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Failed', 'End Date should be greater than Start Date', 'error');
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Failed', 'All fields are mandatory.', 'error');
        }
    };
    ;
    AppComponent.prototype.EditProject = function (proj) {
        proj.Project_Name = proj.Project;
        proj.Priority_Project = proj.Priority;
        proj.Employee_ID = proj.Manager_ID;
        proj.Manager_Name = '';
        proj.selectedManager = proj.Manager_ID;
        if (proj.Start_Date != null)
            proj.Start_Date = proj.Start_Date.slice(0, -9);
        if (proj.End_Date != null)
            proj.End_Date = proj.End_Date.slice(0, -9);
        this.myProjectForm.setValue(proj);
    };
    ;
    AppComponent.prototype.ResetProject = function () {
        this.myProjectForm.reset();
        this.submitted = false;
    };
    AppComponent.prototype.SuspendProject = function (proj) {
        var _this = this;
        this.appServices.SuspendProject(proj).subscribe(function (data) {
            if (data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Success', "Data Suspended successfully...", 'success');
                _this.callAllMethods();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Failed', 'Please try again..', 'error');
            }
        });
    };
    // Code for Task screen
    AppComponent.prototype.getTaskManager = function () {
        var _this = this;
        this.appServices.getTaskManager().subscribe(function (data) {
            _this.taskDetails = data;
            _this.setPage(1);
        });
    };
    ;
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var VID = this.myForm.value.Task_ID;
        var vProjName = this.selectedProject;
        if (vProjName == "")
            vProjName = this.myForm.value.Project_ID;
        var vParentTask = this.selectedParentTask;
        if (vParentTask == "")
            vParentTask = this.myForm.value.Parent_ID;
        var vUserName = this.selectedUser;
        if (vUserName == "")
            vUserName = this.myForm.value.User_ID;
        if (this.myForm.valid && vProjName != "" && vParentTask != "" && vUserName != "") {
            if (this.compareTwoDates(this.myForm.value)) {
                var vTaskForm = {
                    Task_ID: VID,
                    Parent_ID: vParentTask,
                    Task: this.myForm.value.Task,
                    Start_Date: this.myForm.value.Start_Date,
                    End_Date: this.myForm.value.End_Date,
                    Priority: this.myForm.value.Priority,
                    Project_ID: vProjName,
                    User_ID: vUserName
                };
                this.appServices.submitTask(vTaskForm).subscribe(function (data) {
                    if (data) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('success', "Data " + (VID == 0 ? 'Added' : 'Updated') + " successfully...", 'success');
                        _this.myForm.reset();
                        _this.submitted = false;
                        _this.callAllMethods();
                        _this.isTaskUpdate = false;
                        _this.filter = true;
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Failed', 'Please try again..', 'error');
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Failed', 'End Date should be greater than Start Date', 'error');
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Failed', 'All fields are mandatory.', 'error');
        }
    };
    ;
    AppComponent.prototype.EditTask = function (task) {
        this.isTaskUpdate = true;
        this.filter = false;
        task.IsActive = 0;
        task.selectedProject = task.Project_ID;
        task.selectedParentTask = task.Parent_ID;
        task.selectedUser = task.User_ID;
        task.Parent_Task = task.Parent_Task;
        $('.task-manager-page a[href="#addTask"]').tab('show');
        if (task.Start_Date != null)
            task.Start_Date = task.Start_Date.slice(0, -9);
        if (task.End_Date != null)
            task.End_Date = task.End_Date.slice(0, -9);
        this.myForm.setValue(task);
    };
    ;
    AppComponent.prototype.EndTask = function (task) {
        var _this = this;
        if (task.End_Date != null && task.End_Date != "") {
            this.appServices.updateEndTask(task).subscribe(function (data) {
                _this.callAllMethods();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('success', "Data updated successfully...", 'success');
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Failed', 'Please provide End date...', 'error');
        }
    };
    AppComponent.prototype.ResetTask = function () {
        this.myForm.reset();
        this.submitted = false;
    };
    // Code for User screen  
    AppComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.appServices.getUserDetails().subscribe(function (data) {
            _this.userDetails = data;
        });
    };
    ;
    AppComponent.prototype.AddUserSubmit = function () {
        var _this = this;
        this.addUserSubmitted = true;
        if (this.addUserForm.valid) {
            var VID = this.addUserForm.value.User_ID;
            this.appServices.submitUser(this.addUserForm.value).subscribe(function (data) {
                if (data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Success', "Data " + (VID == 0 ? 'Added' : 'Updated') + " successfully...", 'success');
                    _this.AddUserResetTask();
                    _this.callAllMethods();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Failed', 'Please try again..', 'error');
                }
            });
        }
    };
    ;
    AppComponent.prototype.EditUser = function (user) {
        this.addUserForm.setValue(user);
        this.isUserUpdate = true;
    };
    ;
    AppComponent.prototype.DeleteUser = function (user) {
        $("#deleteModal").modal();
        this.deleteUserValue = user;
    };
    ;
    AppComponent.prototype.ConfirmDeleteUser = function () {
        var _this = this;
        var vDeleteUserValue = this.deleteUserValue;
        this.appServices.deleteUser(vDeleteUserValue).subscribe(function (data) {
            if (data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Success', "Data Deleted successfully...", 'success');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('Failed', 'Please try again..', 'error');
            }
            $("#deleteModal").modal('hide');
            _this.AddUserResetTask();
            _this.callAllMethods();
        });
    };
    ;
    AppComponent.prototype.AddUserResetTask = function () {
        this.addUserForm.reset();
        this.addUserSubmitted = false;
        this.isUserUpdate = false;
    };
    // Common function
    AppComponent.prototype.setPage = function (page) {
        if (this.pager.totalPages != 0) {
            if (page < 1 || page > this.pager.totalPages) {
                return;
            }
        }
        // get pager object from service
        this.pager = this.pageService.getPager(this.taskDetails.length, page);
        // get current page of items
        this.pagedItems = this.taskDetails.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ;
    AppComponent.prototype.compareTwoDates = function (data) {
        if (data.End_Date != null && data.End_Date != '') {
            if (new Date(data.End_Date) < new Date(data.Start_Date))
                return false;
            else
                return true;
        }
        else {
            return true;
        }
    };
    ;
    AppComponent.prototype.AddProject = function () {
        this.userShow = false;
        this.taskShow = false;
        this.projShow = true;
    };
    ;
    AppComponent.prototype.AddTask = function () {
        this.userShow = false;
        this.taskShow = false;
        this.projShow = false;
    };
    ;
    AppComponent.prototype.AddUser = function () {
        this.userShow = true;
        this.taskShow = false;
        this.projShow = false;
    };
    ;
    AppComponent.prototype.ViewTask = function () {
        this.userShow = false;
        this.taskShow = true;
        this.projShow = false;
    };
    ;
    AppComponent.prototype.ManagerSearch = function () {
        this.selectedManager = this.myProjectForm.get('selectedManager').value;
        $("#managerModal").modal();
    };
    ;
    AppComponent.prototype.ProjectSearch = function () {
        this.selectedProject = this.myForm.get('selectedProject').value;
        $("#projNameModal").modal();
    };
    ;
    AppComponent.prototype.ParentSearch = function () {
        this.selectedParentTask = this.myForm.get('selectedParentTask').value;
        $("#parentTaskModal").modal();
    };
    ;
    AppComponent.prototype.UserSearch = function () {
        this.selectedUser = this.myForm.get('selectedUser').value;
        $("#userModal").modal();
    };
    ;
    AppComponent.prototype.SearchTaskProject = function () {
        this.searchedProject = this.viewTaskForm.get('searchedProject').value;
        $("#taskProjectModal").modal();
    };
    ;
    AppComponent.prototype.onFilterChange = function () {
        this.filter = !this.filter;
    };
    ;
    AppComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    ;
    AppComponent.prototype.onParentCheck = function () {
        this.filter = !this.filter;
        if (!this.filter) {
        }
    };
    ;
    AppComponent.prototype.sortProject = function (projectkey) {
        this.projDetails = this.orderPipe.transform(this.projDetails, projectkey);
    };
    ;
    AppComponent.prototype.sortUser = function (userkey) {
        this.userDetails = this.orderPipe.transform(this.userDetails, userkey);
    };
    ;
    AppComponent.prototype.sortTask = function (taskkey) {
        this.pagedItems = this.orderPipe.transform(this.pagedItems, taskkey);
    };
    ;
    AppComponent = AppComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_services_pageService__WEBPACK_IMPORTED_MODULE_3__["PagerService"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderPipe"]],
            providers: [],
            bootstrap: [AppComponent_1]
        }),
        __metadata("design:paramtypes", [_services_common_service_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceService"], _services_pageService__WEBPACK_IMPORTED_MODULE_3__["PagerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_order_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderPipe"]])
    ], AppComponent);
    return AppComponent;
    var AppComponent_1;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ "./node_modules/@ngx-loading-bar/http-client/esm5/ngx-loading-bar-http-client.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







 // <-- Import OrderModule
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_6__["LoadingBarHttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderModule"]
            ],
            providers: [ngx_order_pipe__WEBPACK_IMPORTED_MODULE_7__["OrderPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, args) {
        if (args.UserNameSearch) {
            value = value.filter(function (user) { return user.First_Name.toLowerCase().indexOf(args.UserNameSearch.toLowerCase()) != -1 || (user.Last_Name.toLowerCase().indexOf(args.UserNameSearch.toLowerCase()) != -1); });
        }
        if (args.ProjectSearch) {
            value = value.filter(function (task) { return task.Project_Name.toLowerCase().indexOf(args.ProjectSearch.toLowerCase()) != -1; });
        }
        if (args.AllProjectSearch) {
            value = value.filter(function (proj) { return proj.Project.toLowerCase().indexOf(args.AllProjectSearch.toLowerCase()) != -1; });
        }
        if (args.radioProjectSearch) {
            value = value.filter(function (project) { return project.Project.toLowerCase().indexOf(args.radioProjectSearch.toLowerCase()) != -1; });
        }
        if (args.radioTaskProjectSearch) {
            value = value.filter(function (proj) { return proj.Project.toLowerCase().indexOf(args.radioTaskProjectSearch.toLowerCase()) != -1; });
        }
        if (args.radioManagerSearch) {
            value = value.filter(function (manager) { return manager.Manager_ID == args.radioManagerSearch; });
        }
        if (args.radioParentTaskSearch) {
            value = value.filter(function (parent) { return parent.Parent_Task.toLowerCase().indexOf(args.radioParentTaskSearch.toLowerCase()) != -1; });
        }
        if (args.radioUserTaskSearch) {
            value = value.filter(function (user) { return user.First_Name.toLowerCase().indexOf(args.radioUserTaskSearch.toLowerCase()) != -1 || (user.Last_Name.toLowerCase().indexOf(args.radioUserTaskSearch.toLowerCase()) != -1); });
        }
        return value;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/common-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/common-service.service.ts ***!
  \****************************************************/
/*! exports provided: CommonServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonServiceService", function() { return CommonServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var vURL = "http://localhost:81/";
// var vURL = "http://localhost:10326/";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var CommonServiceService = /** @class */ (function () {
    function CommonServiceService(http) {
        this.http = http;
    }
    // Common Code
    CommonServiceService.prototype.getParentTask = function () {
        return this.http.get(vURL + "api/TaskManager/GetParentTaskList");
    };
    // Code for Project screen
    CommonServiceService.prototype.getProjectDetails = function () {
        return this.http.get(vURL + "api/Project/GetProjectDetails");
    };
    CommonServiceService.prototype.getManagerDetails = function () {
        return this.http.get(vURL + "api/Project/GetManagerDetails");
    };
    CommonServiceService.prototype.getProjectName = function () {
        return this.http.get(vURL + "api/Project/GetProjectName");
    };
    CommonServiceService.prototype.submitProject = function (project) {
        return this.http.post(vURL + "api/Project/SubmitProjectDetail", project, httpOptions);
    };
    CommonServiceService.prototype.SuspendProject = function (project) {
        return this.http.post(vURL + "api/Project/SuspendProjectDetail", project, httpOptions);
    };
    // Code for Task screen
    CommonServiceService.prototype.getTaskManager = function () {
        return this.http.get(vURL + "api/TaskManager/GetTaskDetailList");
    };
    CommonServiceService.prototype.submitTask = function (task) {
        return this.http.post(vURL + "api/TaskManager/SubmitTaskDetail", task, httpOptions);
    };
    CommonServiceService.prototype.updateEndTask = function (task) {
        return this.http.post(vURL + "api/TaskManager/UpdateEndTask", task);
    };
    // Code for User screen 
    CommonServiceService.prototype.getUserDetails = function () {
        return this.http.get(vURL + "api/User/GetUserDetails");
    };
    CommonServiceService.prototype.submitUser = function (user) {
        return this.http.post(vURL + "api/User/SubmitUserDetail", user, httpOptions);
    };
    CommonServiceService.prototype.deleteUser = function (user) {
        return this.http.post(vURL + "api/User/DeleteUserDetail", user, httpOptions);
    };
    CommonServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommonServiceService);
    return CommonServiceService;
}());

;


/***/ }),

/***/ "./src/app/services/pageService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/pageService.ts ***!
  \*****************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 5; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\TaskMange_SBA\TaskManger_SBA\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var UserNurse_exports = {};
__export(UserNurse_exports, {
  default: () => UserNurse_default
});
module.exports = __toCommonJS(UserNurse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserNurseDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 176C96 246.75 153.25 304 224 304S352 246.75 352 176V160H96V176Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M327.188 312.812L224 416L120.812 312.812C50.885 335.117 0 400.008 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 400.008 397.119 335.113 327.188 312.812ZM352 65.875C352 52.5 343.75 40.5 331.25 35.875L246.5 4.125C239.25 1.375 231.625 0 224 0S208.75 1.375 201.5 4.125L116.75 35.875C104.25 40.5 96 52.5 96 65.875V160H352V65.875ZM264 88.375C264 91.125 261.75 93.375 259 93.375H237.375V115C237.375 117.75 235.125 120 232.375 120H215.625C212.875 120 210.625 117.75 210.625 115V93.375H189C186.25 93.375 184 91.125 184 88.375V71.625C184 68.875 186.25 66.625 189 66.625H210.625V45C210.625 42.25 212.875 40 215.625 40H232.375C235.125 40 237.375 42.25 237.375 45V66.625H259C261.75 66.625 264 68.875 264 71.625V88.375Z " })
    ]
  }
));
UserNurseDuotone.displayName = "UserNurseDuotone";
var UserNurse_default = UserNurseDuotone;

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
var Podium_exports = {};
__export(Podium_exports, {
  default: () => Podium_default
});
module.exports = __toCommonJS(Podium_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PodiumThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 152H104V112C104 81.125 129.125 56 160 56H192.807C196.631 78.68 216.23 96 240 96H304C330.51 96 352 74.51 352 48S330.51 0 304 0H240C216.23 0 196.631 17.32 192.807 40H160C120.312 40 88 72.297 88 112V152H8C3.594 152 0 155.578 0 160S3.594 168 8 168H440C444.406 168 448 164.422 448 160S444.406 152 440 152ZM240 16H304C321.645 16 336 30.355 336 48S321.645 80 304 80H240C222.355 80 208 65.645 208 48S222.355 16 240 16ZM408.906 216.047C404.062 215.406 400.562 218.719 400.062 223.094L371.312 474.734C369.906 486.859 359.656 496 347.438 496H100.562C88.344 496 78.094 486.859 76.687 474.734L47.938 223.094C47.438 218.719 43.75 215.438 39.094 216.047C34.688 216.547 31.562 220.516 32.062 224.906L60.812 476.547C63.094 496.766 80.188 512 100.562 512H347.438C367.813 512 384.906 496.766 387.188 476.547L415.938 224.906C416.438 220.516 413.312 216.547 408.906 216.047Z" })
  }
));
PodiumThin.displayName = "PodiumThin";
var Podium_default = PodiumThin;

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
var Keynote_exports = {};
__export(Keynote_exports, {
  default: () => Keynote_default
});
module.exports = __toCommonJS(Keynote_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KeynoteRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.406 257.875L443.406 169.875C438.891 163.688 431.672 160 424 160H144V136C144 101.172 168.877 72.055 201.797 65.438C209.135 74.148 219.719 80 232 80H312C334.092 80 352 62.09 352 40C352 17.906 334.092 0 312 0H232C218.377 0 206.939 7.246 199.715 17.648C141.293 25.688 96 75.422 96 136V160H88C80.328 160 73.109 163.688 68.594 169.875L4.594 257.875C1.609 262 0 266.938 0 272V328C0 341.25 10.75 352 24 352H232V464H152C138.75 464 128 474.75 128 488S138.75 512 152 512H360C373.25 512 384 501.25 384 488S373.25 464 360 464H280V352H488C501.25 352 512 341.25 512 328V272C512 266.938 510.391 262 507.406 257.875ZM464 304H48V279.812L100.219 208H411.781L464 279.812V304Z" })
  }
));
KeynoteRegular.displayName = "KeynoteRegular";
var Keynote_default = KeynoteRegular;

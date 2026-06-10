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
var TabletRugged_exports = {};
__export(TabletRugged_exports, {
  default: () => TabletRugged_default
});
module.exports = __toCommonJS(TabletRugged_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TabletRuggedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.25 164.375C444.625 161.75 448 156.25 448 150.125V73.875C448 67.75 444.625 62.25 439.25 59.625L416 48C416 21.5 394.5 0 368 0H80C53.5 0 32 21.5 32 48L8.75 59.625C3.375 62.25 0 67.75 0 73.875V150.125C0 156.25 3.375 161.75 8.75 164.375L32 176V192L8.75 203.625C3.375 206.25 0 211.75 0 217.875V294.125C0 300.25 3.375 305.75 8.75 308.375L32 320V336L8.75 347.625C3.375 350.25 0 355.75 0 361.875V438.125C0 444.25 3.375 449.75 8.75 452.375L32 464C32 490.5 53.5 512 80 512H368C394.5 512 416 490.5 416 464L439.25 452.375C444.625 449.75 448 444.25 448 438.125V361.875C448 355.75 444.625 350.25 439.25 347.625L416 336V320L439.25 308.375C444.625 305.75 448 300.25 448 294.125V217.875C448 211.75 444.625 206.25 439.25 203.625L416 192V176L439.25 164.375ZM352 432C352 440.75 344.75 448 336 448H112C103.25 448 96 440.75 96 432V80C96 71.25 103.25 64 112 64H336C344.75 64 352 71.25 352 80V432Z" })
  }
));
TabletRuggedSolid.displayName = "TabletRuggedSolid";
var TabletRugged_default = TabletRuggedSolid;

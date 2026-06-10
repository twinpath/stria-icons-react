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
const TabletRuggedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.25 164.375C444.625 161.75 448 156.25 448 150.125V73.875C448 67.75 444.625 62.25 439.25 59.625L416 48C416 21.5 394.5 0 368 0H80C53.5 0 32 21.5 32 48L8.75 59.625C3.375 62.25 0 67.75 0 73.875V150.125C0 156.25 3.375 161.75 8.75 164.375L32 176V192L8.75 203.625C3.375 206.25 0 211.75 0 217.875V294.125C0 300.25 3.375 305.75 8.75 308.375L32 320V336L8.75 347.625C3.375 350.25 0 355.75 0 361.875V438.125C0 444.25 3.375 449.75 8.75 452.375L32 464C32 490.5 53.5 512 80 512H368C394.5 512 416 490.5 416 464L439.25 452.375C444.625 449.75 448 444.25 448 438.125V361.875C448 355.75 444.625 350.25 439.25 347.625L416 336V320L439.25 308.375C444.625 305.75 448 300.25 448 294.125V217.875C448 211.75 444.625 206.25 439.25 203.625L416 192V176L439.25 164.375ZM401.75 220.625L416 227.75V284.25L384 300.25V355.75L416 371.75V428.25L384 444.25V464C384 472.75 376.75 480 368 480H80C71.25 480 64 472.75 64 464V444.25L32 428.25V371.75L64 355.75V300.25L32 284.25V227.75L64 211.75V156.25L32 140.25V83.75L64 67.75V48C64 39.25 71.25 32 80 32H368C376.75 32 384 39.25 384 48V67.75L416 83.75V140.25L384 156.25V211.75L401.75 220.625ZM320 64H128C110.4 64 96 78.4 96 96V416C96 433.6 110.4 448 128 448H320C337.6 448 352 433.6 352 416V96C352 78.4 337.6 64 320 64ZM320 416H128V96H320V416Z" })
  }
));
TabletRuggedLight.displayName = "TabletRuggedLight";
var TabletRugged_default = TabletRuggedLight;

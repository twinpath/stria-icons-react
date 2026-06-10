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
var TrashClock_exports = {};
__export(TrashClock_exports, {
  default: () => TrashClock_default
});
module.exports = __toCommonJS(TrashClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashClockSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 80V48C448 39.162 440.838 32 432 32H320L308.422 8.844C305.713 3.424 300.172 0 294.111 0H153.889C147.828 0 142.289 3.424 139.578 8.844L128 32H16C7.164 32 0 39.162 0 48V80C0 88.836 7.164 96 16 96H432C440.838 96 448 88.836 448 80ZM432 224C352.375 224 288 288.375 288 368S352.375 512 432 512S576 447.625 576 368S511.625 224 432 224ZM480 384H425.75C420.375 384 416 379.625 416 374.25V304C416 295.162 423.164 288 432 288C440.838 288 448 295.162 448 304V352H480C488.838 352 496 359.162 496 368C496 376.836 488.838 384 480 384ZM256 368C256 277.752 324.311 203.242 411.924 193.232L416 128H32L53.188 467C54.75 491.844 76.219 512 101.094 512H331.125C285.771 480.131 256 427.518 256 368Z" })
  }
));
TrashClockSolid.displayName = "TrashClockSolid";
var TrashClock_default = TrashClockSolid;

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
var H4_exports = {};
__export(H4_exports, {
  default: () => H4_default
});
module.exports = __toCommonJS(H4_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H4Light = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 64.219C615.156 64.219 608 71.371 608 80.21V267.884H413.875L447.735 83.083C449.328 74.4 443.578 66.061 434.875 64.468C426.235 63.094 417.844 68.654 416.266 77.336L378.938 281.001C378.078 285.655 379.344 290.465 382.375 294.119C385.422 297.773 389.922 299.866 394.672 299.866H608V432.009C608 440.848 615.156 448 624 448S640 440.848 640 432.009V80.21C640 71.371 632.844 64.219 624 64.219ZM304 64C295.156 64 288 71.152 288 79.991V239.9H32V79.991C32 71.152 24.844 64 16 64S0 71.152 0 79.991V431.79C0 440.629 7.156 447.781 16 447.781S32 440.629 32 431.79V271.882H288V431.79C288 440.629 295.156 447.781 304 447.781S320 440.629 320 431.79V79.991C320 71.152 312.844 64 304 64Z" })
  }
));
H4Light.displayName = "H4Light";
var H4_default = H4Light;

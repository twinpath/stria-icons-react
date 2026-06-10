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
var TemperatureArrowDown_exports = {};
__export(TemperatureArrowDown_exports, {
  default: () => TemperatureArrowDown_default
});
module.exports = __toCommonJS(TemperatureArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureArrowDownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 352.807V296C152 291.578 148.406 288 144 288S136 291.578 136 296V352.807C113.32 356.631 96 376.23 96 400C96 426.51 117.49 448 144 448S192 426.51 192 400C192 376.23 174.68 356.631 152 352.807ZM144 432C126.355 432 112 417.645 112 400S126.355 368 144 368S176 382.355 176 400S161.645 432 144 432ZM224 80C224 35.816 188.184 0 144 0S64 35.816 64 80V322.492C44.422 342.623 32 369.697 32 400C32 461.855 82.145 512 144 512S256 461.855 256 400C256 369.697 243.578 342.623 224 322.492V80ZM240 400C240 452.934 196.936 496 144 496S48 452.934 48 400C48 375.426 57.756 351.861 75.471 333.646L80 328.988V80C80 44.711 108.711 16 144 16S208 44.711 208 80V328.988L212.529 333.646C230.244 351.861 240 375.426 240 400ZM322.344 389.656L410.344 477.656C413.469 480.781 418.531 480.781 421.656 477.656L509.656 389.656C512.781 386.531 512.781 381.469 509.656 378.344S501.469 375.219 498.344 378.344L424 452.688V40C424 35.578 420.422 32 416 32S408 35.578 408 40V452.688L333.656 378.344C332.094 376.781 330.047 376 328 376S323.906 376.781 322.344 378.344C319.219 381.469 319.219 386.531 322.344 389.656Z" })
  }
));
TemperatureArrowDownThin.displayName = "TemperatureArrowDownThin";
var TemperatureArrowDown_default = TemperatureArrowDownThin;

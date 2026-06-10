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
var TemperatureList_exports = {};
__export(TemperatureList_exports, {
  default: () => TemperatureList_default
});
module.exports = __toCommonJS(TemperatureList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureListThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 352.807V136C152 131.578 148.406 128 144 128S136 131.578 136 136V352.807C113.32 356.631 96 376.23 96 400C96 426.51 117.49 448 144 448S192 426.51 192 400C192 376.23 174.68 356.631 152 352.807ZM144 432C126.355 432 112 417.645 112 400S126.355 368 144 368S176 382.355 176 400S161.645 432 144 432ZM224 80C224 35.816 188.184 0 144 0S64 35.816 64 80V322.492C44.422 342.623 32 369.697 32 400C32 461.855 82.145 512 144 512S256 461.855 256 400C256 369.697 243.578 342.623 224 322.492V80ZM240 400C240 452.934 196.936 496 144 496S48 452.934 48 400C48 375.426 57.756 351.861 75.471 333.646L80 328.988V80C80 44.711 108.711 16 144 16S208 44.711 208 80V328.988L212.529 333.646C230.244 351.861 240 375.426 240 400ZM504 160H328C323.594 160 320 163.594 320 168S323.594 176 328 176H504C508.406 176 512 172.406 512 168S508.406 160 504 160ZM328 48H504C508.406 48 512 44.406 512 40S508.406 32 504 32H328C323.594 32 320 35.594 320 40S323.594 48 328 48ZM504 288H360C355.594 288 352 291.594 352 296S355.594 304 360 304H504C508.406 304 512 300.406 512 296S508.406 288 504 288Z" })
  }
));
TemperatureListThin.displayName = "TemperatureListThin";
var TemperatureList_default = TemperatureListThin;

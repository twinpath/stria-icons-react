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
var TemperatureFull_exports = {};
__export(TemperatureFull_exports, {
  default: () => TemperatureFull_default
});
module.exports = __toCommonJS(TemperatureFull_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureFullThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 322.492V80C240 35.816 204.184 0 160 0S80 35.816 80 80V322.492C60.422 342.623 48 369.697 48 400C48 461.855 98.145 512 160 512S272 461.855 272 400C272 369.697 259.578 342.623 240 322.492ZM160 496C107.064 496 64 452.934 64 400C64 375.426 73.756 351.861 91.471 333.646L96 328.988V80C96 44.711 124.711 16 160 16S224 44.711 224 80V328.988L228.529 333.646C246.244 351.861 256 375.426 256 400C256 452.934 212.936 496 160 496ZM168 352.807V72C168 67.578 164.406 64 160 64S152 67.578 152 72V352.807C129.32 356.631 112 376.23 112 400C112 426.51 133.49 448 160 448S208 426.51 208 400C208 376.23 190.68 356.631 168 352.807ZM160 432C142.355 432 128 417.645 128 400S142.355 368 160 368S192 382.355 192 400S177.645 432 160 432Z" })
  }
));
TemperatureFullThin.displayName = "TemperatureFullThin";
var TemperatureFull_default = TemperatureFullThin;

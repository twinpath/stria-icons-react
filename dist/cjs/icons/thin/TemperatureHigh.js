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
var TemperatureHigh_exports = {};
__export(TemperatureHigh_exports, {
  default: () => TemperatureHigh_default
});
module.exports = __toCommonJS(TemperatureHigh_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TemperatureHighThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 80C256 35.816 220.184 0 176 0S96 35.816 96 80V322.492C76.422 342.623 64 369.697 64 400C64 461.855 114.145 512 176 512S288 461.855 288 400C288 369.697 275.578 342.623 256 322.492V80ZM272 400C272 452.934 228.936 496 176 496S80 452.934 80 400C80 375.426 89.756 351.861 107.471 333.646L112 328.988V80C112 44.711 140.711 16 176 16S240 44.711 240 80V328.988L244.529 333.646C262.244 351.861 272 375.426 272 400ZM384 32C348.654 32 320 60.652 320 96C320 131.346 348.654 160 384 160S448 131.346 448 96C448 60.652 419.346 32 384 32ZM384 144C357.533 144 336 122.467 336 96S357.533 48 384 48S432 69.533 432 96S410.467 144 384 144ZM184 352.807V72C184 67.578 180.406 64 176 64S168 67.578 168 72V352.807C145.32 356.631 128 376.23 128 400C128 426.51 149.49 448 176 448S224 426.51 224 400C224 376.23 206.68 356.631 184 352.807ZM176 432C158.355 432 144 417.645 144 400S158.355 368 176 368S208 382.355 208 400S193.645 432 176 432Z" })
  }
));
TemperatureHighThin.displayName = "TemperatureHighThin";
var TemperatureHigh_default = TemperatureHighThin;

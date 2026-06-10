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
var CabinetFiling_exports = {};
__export(CabinetFiling_exports, {
  default: () => CabinetFiling_default
});
module.exports = __toCommonJS(CabinetFiling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CabinetFilingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 400C140.422 400 144 396.422 144 392V376C144 371.594 147.594 368 152 368H296C300.406 368 304 371.594 304 376V392C304 396.422 307.578 400 312 400S320 396.422 320 392V376C320 362.766 309.234 352 296 352H152C138.766 352 128 362.766 128 376V392C128 396.422 131.578 400 136 400ZM296 96H152C138.766 96 128 106.766 128 120V136C128 140.422 131.578 144 136 144S144 140.422 144 136V120C144 115.594 147.594 112 152 112H296C300.406 112 304 115.594 304 120V136C304 140.422 307.578 144 312 144S320 140.422 320 136V120C320 106.766 309.234 96 296 96ZM384 0H64C28.656 0 0 28.656 0 64V448C0 483.344 28.656 512 64 512H384C419.344 512 448 483.344 448 448V64C448 28.656 419.344 0 384 0ZM432 448C432 474.469 410.469 496 384 496H64C37.531 496 16 474.469 16 448V264H432V448ZM432 248H16V64C16 37.531 37.531 16 64 16H384C410.469 16 432 37.531 432 64V248Z" })
  }
));
CabinetFilingThin.displayName = "CabinetFilingThin";
var CabinetFiling_default = CabinetFilingThin;

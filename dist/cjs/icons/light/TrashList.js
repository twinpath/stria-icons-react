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
var TrashList_exports = {};
__export(TrashList_exports, {
  default: () => TrashList_default
});
module.exports = __toCommonJS(TrashList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashListLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H320L286.375 19.25C277.375 7.125 263.125 0 248 0H168C152.875 0 138.625 7.125 129.625 19.25L96 64H16C7.201 64 0 71.199 0 80C0 88.799 7.201 96 16 96H400C408.801 96 416 88.799 416 80C416 71.199 408.801 64 400 64ZM136 64L155.25 38.375C158.25 34.375 163 32 168 32H248C253 32 257.75 34.375 260.75 38.375L280 64H136ZM368.775 128C360.49 128 353.576 134.324 352.84 142.576L324 465.375C323.375 473.625 316.375 480 308.125 480H107.875C99.625 480 92.625 473.625 92 465.375L63.162 142.576C62.426 134.324 55.51 128 47.227 128C37.828 128 30.453 136.061 31.289 145.422L60.125 468.25C62.375 493 83 512 107.875 512H308.125C333 512 353.625 493 355.875 468.25L384.711 145.422C385.549 136.061 378.174 128 368.775 128ZM624 160H464C455.156 160 448 167.156 448 176S455.156 192 464 192H624C632.844 192 640 184.844 640 176S632.844 160 624 160ZM528 416H464C455.156 416 448 423.156 448 432S455.156 448 464 448H528C536.844 448 544 440.844 544 432S536.844 416 528 416ZM592 288H464C455.156 288 448 295.156 448 304S455.156 320 464 320H592C600.844 320 608 312.844 608 304S600.844 288 592 288Z" })
  }
));
TrashListLight.displayName = "TrashListLight";
var TrashList_default = TrashListLight;

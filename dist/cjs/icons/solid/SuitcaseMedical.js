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
var SuitcaseMedical_exports = {};
__export(SuitcaseMedical_exports, {
  default: () => SuitcaseMedical_default
});
module.exports = __toCommonJS(SuitcaseMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SuitcaseMedicalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 144V432C0 457.594 22.406 480 48 480H64V96H48C22.406 96 0 118.406 0 144ZM464 96H448V480H464C489.594 480 512 457.594 512 432V144C512 118.406 489.594 96 464 96ZM384 48C384 22.406 361.594 0 336 0H176C150.406 0 128 22.406 128 48V96H96V480H416V96H384V48ZM176 48H336V96H176V48ZM352 312C352 316.375 348.375 320 344 320H288V376C288 380.375 284.375 384 280 384H232C227.625 384 224 380.375 224 376V320H168C163.625 320 160 316.375 160 312V264C160 259.625 163.625 256 168 256H224V200C224 195.625 227.625 192 232 192H280C284.375 192 288 195.625 288 200V256H344C348.375 256 352 259.625 352 264V312Z" })
  }
));
SuitcaseMedicalSolid.displayName = "SuitcaseMedicalSolid";
var SuitcaseMedical_default = SuitcaseMedicalSolid;

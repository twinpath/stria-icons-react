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
var SeatAirline_exports = {};
__export(SeatAirline_exports, {
  default: () => SeatAirline_default
});
module.exports = __toCommonJS(SeatAirline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SeatAirlineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440.369 284.125C434.103 276.031 424.884 271.375 415.071 271.375H68.253L40.522 208H344.007C348.429 208 352.007 204.406 352.007 200S348.429 192 344.007 192H33.522L21.407 164.312C17.813 156.125 16 147.406 16 138.469V8C16 3.594 12.422 0 8 0C3.578 0 0 3.594 0 8V138.469C0 149.625 2.266 160.5 6.75 170.75L92.689 367.156C105.502 396.438 134.456 415.375 166.441 415.375H232.265C232.243 415.613 232.005 415.756 232.005 416V496H104.002C99.58 496 96.002 499.594 96.002 504S99.58 512 104.002 512H376.008C380.43 512 384.008 508.406 384.008 504S380.43 496 376.008 496H248.005V416C248.005 415.756 247.767 415.613 247.745 415.375H389.821C408.227 415.375 424.54 402.031 429.525 382.875L446.791 316.344C449.697 305.125 447.291 293.062 440.369 284.125ZM431.29 312.344L414.024 378.875C410.899 390.938 400.93 399.375 389.821 399.375H166.441C140.815 399.375 117.612 384.219 107.346 360.719L75.254 287.375H415.071C419.962 287.375 424.462 289.688 427.712 293.906C431.634 298.969 432.978 305.875 431.29 312.344Z" })
  }
));
SeatAirlineThin.displayName = "SeatAirlineThin";
var SeatAirline_default = SeatAirlineThin;

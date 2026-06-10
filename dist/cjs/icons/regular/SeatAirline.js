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
const SeatAirlineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M443.472 281.969C438.956 275.719 431.722 272 424.003 272H100.384L79.292 224H328.002C341.256 224 352.003 213.254 352.003 200C352.003 186.744 341.256 176 328.002 176H58.202L51.61 161C49.219 155.531 48 149.75 48 143.812V24C48 10.75 37.25 0 24 0S0 10.75 0 24V143.812C0 156.437 2.578 168.719 7.672 180.312L87.313 361.562C101.844 394.625 134.642 416 170.845 416H216.002V464H120.001C106.747 464 96.001 474.744 96.001 488C96.001 501.254 106.747 512 120.001 512H360.003C373.257 512 384.003 501.254 384.003 488C384.003 474.744 373.257 464 360.003 464H264.002V416H392.003C402.331 416 411.503 409.375 414.769 399.594L446.769 303.594C449.206 296.281 447.988 288.219 443.472 281.969ZM374.706 368H170.845C153.673 368 138.126 357.906 131.251 342.25L121.474 320H390.706L374.706 368Z" })
  }
));
SeatAirlineRegular.displayName = "SeatAirlineRegular";
var SeatAirline_default = SeatAirlineRegular;

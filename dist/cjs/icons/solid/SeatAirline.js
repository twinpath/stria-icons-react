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
const SeatAirlineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M444.627 334.312L412.627 398.312C407.205 409.156 396.127 416 384.002 416H264V464H360C373.254 464 384 474.744 384 488C384 501.254 373.254 512 360 512H120C106.746 512 96 501.254 96 488C96 474.744 106.746 464 120 464H216V416H171.859C133.734 416 99.219 393.438 83.906 358.5L8.047 185.062C2.781 173.062 0 159.781 0 146.625V32C0 14.312 14.328 0 32 0S64 14.312 64 32V146.625C64 151 64.922 155.438 66.672 159.406L80.928 192H320C337.674 192 352 206.326 352 224C352 241.672 337.674 256 320 256H108.92L123.33 288.941C124.92 288.699 126.344 288 128 288H416.002C427.096 288 437.393 293.75 443.221 303.188S449.58 324.406 444.627 334.312Z" })
  }
));
SeatAirlineSolid.displayName = "SeatAirlineSolid";
var SeatAirline_default = SeatAirlineSolid;

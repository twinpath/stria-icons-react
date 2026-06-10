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
var TransgenderAlt_exports = {};
__export(TransgenderAlt_exports, {
  default: () => TransgenderAlt_default
});
module.exports = __toCommonJS(TransgenderAlt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransgenderAltRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 0H408C394.75 0 384 10.75 384 24S394.75 48 408 48H430.062L350.541 127.521C323.998 107.949 291.508 96 256 96S188.002 107.949 161.459 127.521L145.938 112L160.969 96.969C170.344 87.594 170.344 72.406 160.969 63.031S136.406 53.656 127.031 63.031L112 78.062L81.938 48H104C117.25 48 128 37.25 128 24S117.25 0 104 0H24C10.75 0 0 10.75 0 24V104C0 117.25 10.75 128 24 128S48 117.25 48 104V81.938L78.062 112L63.031 127.031C53.656 136.406 53.656 151.594 63.031 160.969C67.719 165.656 73.844 168 80 168S92.281 165.656 96.969 160.969L112 145.938L127.521 161.459C107.949 188.002 96 220.492 96 256C96 336.145 155.111 401.92 232 413.58V432H208C194.75 432 184 442.75 184 456S194.75 480 208 480H232V488C232 501.25 242.75 512 256 512S280 501.25 280 488V480H304C317.25 480 328 469.25 328 456S317.25 432 304 432H280V413.582C356.891 401.924 416 336.145 416 256C416 220.492 404.051 188.002 384.479 161.459L464 81.938V104C464 117.25 474.75 128 488 128S512 117.25 512 104V24C512 10.75 501.25 0 488 0ZM256 368C194.244 368 144 317.758 144 256C144 225.342 156.426 197.559 176.451 177.312C176.607 177.164 176.816 177.121 176.969 176.969S177.164 176.607 177.312 176.451C197.557 156.424 225.342 144 256 144S314.441 156.422 334.686 176.447C334.834 176.604 334.877 176.814 335.031 176.969S335.396 177.166 335.553 177.314C355.578 197.559 368 225.342 368 256C368 317.758 317.758 368 256 368Z" })
  }
));
TransgenderAltRegular.displayName = "TransgenderAltRegular";
var TransgenderAlt_default = TransgenderAltRegular;

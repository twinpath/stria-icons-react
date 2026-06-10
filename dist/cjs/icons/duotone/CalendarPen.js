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
var CalendarPen_exports = {};
__export(CalendarPen_exports, {
  default: () => CalendarPen_default
});
module.exports = __toCommonJS(CalendarPen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalendarPenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM188.93 435.061C187.254 436.736 185.121 437.877 182.797 438.342L135.187 447.863C130.99 448.703 127.289 445.002 128.129 440.805L137.648 393.197C138.113 390.875 139.256 388.74 140.932 387.064L231.508 296.492L279.512 344.496L188.93 435.061ZM314.736 309.277L296.498 327.514L248.492 279.508L266.727 261.273C273.756 254.242 285.17 254.242 292.201 261.273L314.736 283.807C321.766 290.838 321.766 302.24 314.736 309.277Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 64H352V32C352 14.327 337.673 0 320 0H320C302.327 0 288 14.327 288 32V64H160V32C160 14.327 145.673 0 128 0H128C110.327 0 96 14.327 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64ZM140.932 387.064C139.256 388.74 138.113 390.875 137.648 393.197L128.129 440.805C127.289 445.002 130.99 448.703 135.188 447.863L182.797 438.342C185.121 437.877 187.254 436.736 188.93 435.061L279.512 344.496L231.508 296.492L140.932 387.064ZM292.201 261.273C285.17 254.242 273.756 254.242 266.727 261.273L248.492 279.508L296.498 327.514L314.736 309.277C321.766 302.24 321.766 290.838 314.736 283.807L292.201 261.273Z" })
    ]
  }
));
CalendarPenDuotone.displayName = "CalendarPenDuotone";
var CalendarPen_default = CalendarPenDuotone;

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
var PersonSeatReclined_exports = {};
__export(PersonSeatReclined_exports, {
  default: () => PersonSeatReclined_default
});
module.exports = __toCommonJS(PersonSeatReclined_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSeatReclinedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M264.003 384H149.052C115.427 384 86.474 359.344 80.24 325.344L47.615 147.656C45.209 134.625 32.615 125.875 19.679 128.406C6.632 130.781 -1.993 143.312 0.398 156.344L33.021 334.031C43.459 390.781 92.255 432 149.052 432H264.003C277.251 432 288.001 421.25 288.001 408S277.251 384 264.003 384ZM112.005 96C138.515 96 160.003 74.508 160.003 48S138.515 0 112.005 0S64.005 21.492 64.005 48S85.496 96 112.005 96ZM424 432H391.703L341.986 318.375C338.173 309.656 329.533 304 320.001 304H187.564L175.564 240H296.001C309.255 240 320.001 229.254 320.001 216C320.001 202.744 309.255 192 296.001 192H166.564L159.457 154.094C156.207 136.719 139.49 125.312 122.115 128.562S93.302 148.531 96.552 165.906L126.552 325.906C129.443 341.281 142.865 352 157.972 352C159.101 352 304.298 352 304.298 352L354.017 465.625C357.83 474.344 366.47 480 376.001 480H424C437.25 480 448 469.25 448 456S437.25 432 424 432Z" })
  }
));
PersonSeatReclinedRegular.displayName = "PersonSeatReclinedRegular";
var PersonSeatReclined_default = PersonSeatReclinedRegular;

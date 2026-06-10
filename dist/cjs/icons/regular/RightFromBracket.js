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
var RightFromBracket_exports = {};
__export(RightFromBracket_exports, {
  default: () => RightFromBracket_default
});
module.exports = __toCommonJS(RightFromBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightFromBracketRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M168 432H96C69.6 432 48 410.398 48 384V128C48 101.602 69.6 80 96 80H168C181.254 80 192 69.254 192 56C192 42.742 181.254 32 168 32H96C42.98 32 0 74.98 0 128V384C0 437.02 42.98 480 96 480H168C181.254 480 192 469.254 192 456C192 442.742 181.254 432 168 432ZM503.938 238.555L351.5 104.422C341.656 95.672 327.5 93.547 315.406 98.953C303.625 104.266 296 115.922 296 128.672V183.984H176C153.938 183.984 136 201.922 136 223.984V287.984C136 310.047 153.938 327.984 176 327.984H296V383.297C296 396.047 303.625 407.703 315.406 413.016C319.844 415.016 324.562 415.984 329.25 415.984C337.312 415.984 345.281 413.078 351.5 407.547L503.938 274.43C509.062 269.898 512 263.367 512 256.492S509.062 243.086 503.938 238.555ZM344 350.016V279.984H184V231.984H344V161.953L451.844 256.492L344 350.016Z" })
  }
));
RightFromBracketRegular.displayName = "RightFromBracketRegular";
var RightFromBracket_default = RightFromBracketRegular;

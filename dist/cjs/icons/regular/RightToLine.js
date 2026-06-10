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
var RightToLine_exports = {};
__export(RightToLine_exports, {
  default: () => RightToLine_default
});
module.exports = __toCommonJS(RightToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightToLineRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 424V88C448 74.75 437.25 64 424 64S400 74.75 400 88V424C400 437.25 410.75 448 424 448S448 437.25 448 424ZM342.625 278.25C348.875 272 352 263.812 352 255.625S348.875 239.25 342.625 233L192.176 97.092C161.309 69.207 112 91.113 112 132.711V175.625H48C21.492 175.625 0 197.115 0 223.625V287.625C0 314.135 21.492 335.625 48 335.625H112V378.912C112 420.543 161.371 442.436 192.227 414.488L342.625 278.25ZM160 287.625H48V223.625H160V134.258L297.367 255.625L160 376.992V287.625Z" })
  }
));
RightToLineRegular.displayName = "RightToLineRegular";
var RightToLine_default = RightToLineRegular;

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
var RightToBracket_exports = {};
__export(RightToBracket_exports, {
  default: () => RightToBracket_default
});
module.exports = __toCommonJS(RightToBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightToBracketRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 128V384C512 437.02 469.02 480 416 480H344C330.746 480 320 469.254 320 456C320 442.742 330.746 432 344 432H416C442.4 432 464 410.398 464 384V128C464 101.602 442.4 80 416 80H344C330.746 80 320 69.254 320 56C320 42.742 330.746 32 344 32H416C469.02 32 512 74.98 512 128ZM367.938 273.938L215.5 407.562C209.281 413.094 201.312 416 193.25 416C188.562 416 183.844 415.031 179.406 413.031C167.625 407.719 160 396.062 160 383.312V328H40C17.938 328 0 310.062 0 288V224C0 201.938 17.938 184 40 184H160V128.688C160 115.938 167.625 104.281 179.406 98.969C191.5 93.562 205.656 95.688 215.5 104.438L367.938 238.062C373.062 242.594 376 249.125 376 256S373.062 269.406 367.938 273.938ZM315.844 256L208 161.969V232H48V280H208V350.031L315.844 256Z" })
  }
));
RightToBracketRegular.displayName = "RightToBracketRegular";
var RightToBracket_default = RightToBracketRegular;

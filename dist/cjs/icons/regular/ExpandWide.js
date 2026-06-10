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
var ExpandWide_exports = {};
__export(ExpandWide_exports, {
  default: () => ExpandWide_default
});
module.exports = __toCommonJS(ExpandWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ExpandWideRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 400H48V312C48 298.742 37.254 288 24 288S0 298.742 0 312V424C0 437.254 10.746 448 24 448H136C149.254 448 160 437.254 160 424C160 410.742 149.254 400 136 400ZM136 64H24C10.746 64 0 74.746 0 88V200C0 213.254 10.746 224 24 224C37.258 224 48 213.254 48 200V112H136C149.258 112 160 101.254 160 88S149.258 64 136 64ZM488 64H376C362.746 64 352 74.746 352 88C352 101.258 362.746 112 376 112H464V200C464 213.258 474.746 224 488 224S512 213.258 512 200V88C512 74.746 501.254 64 488 64ZM488 288C474.742 288 464 298.746 464 312V400H376C362.742 400 352 410.746 352 424S362.742 448 376 448H488C501.254 448 512 437.254 512 424V312C512 298.746 501.254 288 488 288Z" })
  }
));
ExpandWideRegular.displayName = "ExpandWideRegular";
var ExpandWide_default = ExpandWideRegular;

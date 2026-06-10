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
var Expand_exports = {};
__export(Expand_exports, {
  default: () => Expand_default
});
module.exports = __toCommonJS(Expand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ExpandRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 32H24C10.746 32 0 42.746 0 56V168C0 181.254 10.746 192 24 192C37.258 192 48 181.254 48 168V80H136C149.258 80 160 69.254 160 56S149.258 32 136 32ZM424 32H312C298.746 32 288 42.746 288 56C288 69.258 298.746 80 312 80H400V168C400 181.258 410.746 192 424 192S448 181.258 448 168V56C448 42.746 437.254 32 424 32ZM136 432H48V344C48 330.742 37.254 320 24 320S0 330.742 0 344V456C0 469.254 10.746 480 24 480H136C149.254 480 160 469.254 160 456C160 442.742 149.254 432 136 432ZM424 320C410.742 320 400 330.746 400 344V432H312C298.742 432 288 442.746 288 456S298.742 480 312 480H424C437.254 480 448 469.254 448 456V344C448 330.746 437.254 320 424 320Z" })
  }
));
ExpandRegular.displayName = "ExpandRegular";
var Expand_default = ExpandRegular;

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
var TicketSimple_exports = {};
__export(TicketSimple_exports, {
  default: () => TicketSimple_default
});
module.exports = __toCommonJS(TicketSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TicketSimpleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 208V112C576 85.5 554.5 64 528 64H48C21.5 64 0 85.5 0 112V208C26.5 208 48 229.5 48 256S26.5 304 0 304V400C0 426.5 21.5 448 48 448H528C554.5 448 576 426.5 576 400V304C549.5 304 528 282.5 528 256S549.5 208 576 208ZM448 320C448 337.672 433.674 352 416 352H160C142.326 352 128 337.672 128 320V192C128 174.326 142.326 160 160 160H416C433.674 160 448 174.326 448 192V320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 352H160C142.327 352 128 337.673 128 320V192C128 174.327 142.327 160 160 160H416C433.673 160 448 174.327 448 192V320C448 337.673 433.673 352 416 352Z" })
    ]
  }
));
TicketSimpleDuotone.displayName = "TicketSimpleDuotone";
var TicketSimple_default = TicketSimpleDuotone;

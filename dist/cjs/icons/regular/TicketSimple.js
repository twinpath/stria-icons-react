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
const TicketSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568 216H576V128C576 92.654 547.346 64 512 64H64C28.654 64 0 92.654 0 128V216H8C30.125 216 48 233.875 48 256S30.125 296 8 296H0V384C0 419.346 28.654 448 64 448H512C547.346 448 576 419.346 576 384V296H568C545.875 296 528 278.125 528 256S545.875 216 568 216ZM528 177.625C499.5 192.25 480 221.875 480 256S499.5 319.75 528 334.375V384C528 392.837 520.837 400 512 400H64C55.163 400 48 392.837 48 384V334.375C76.5 319.75 96 290.125 96 256S76.5 192.25 48 177.625V128C48 119.163 55.163 112 64 112H512C520.837 112 528 119.163 528 128V177.625Z" })
  }
));
TicketSimpleRegular.displayName = "TicketSimpleRegular";
var TicketSimple_default = TicketSimpleRegular;

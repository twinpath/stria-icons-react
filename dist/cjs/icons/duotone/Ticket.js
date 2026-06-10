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
var Ticket_exports = {};
__export(Ticket_exports, {
  default: () => Ticket_default
});
module.exports = __toCommonJS(Ticket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TicketDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 352.001H448V160.001H128V352.001ZM576 208.001V112.001C576 85.501 554.5 64.001 528 64.001H48C21.5 64.001 0 85.501 0 112.001V208.001C26.5 208.001 48 229.501 48 256.001S26.5 304.001 0 304.001V400.001C0 426.501 21.5 448.001 48 448.001H528C554.5 448.001 576 426.501 576 400.001V304.001C549.5 304.001 528 282.501 528 256.001S549.5 208.001 576 208.001ZM480 360.001C480 373.251 469.25 384.001 456 384.001H120C106.75 384.001 96 373.251 96 360.001V152.001C96 138.751 106.75 128.001 120 128.001H456C469.25 128.001 480 138.751 480 152.001V360.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M456 128H120C106.75 128 96 138.75 96 152V360C96 373.25 106.75 384 120 384H456C469.25 384 480 373.25 480 360V152C480 138.75 469.25 128 456 128ZM448 352H128V160H448V352Z" })
    ]
  }
));
TicketDuotone.displayName = "TicketDuotone";
var Ticket_default = TicketDuotone;

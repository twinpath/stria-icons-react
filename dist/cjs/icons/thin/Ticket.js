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
const TicketThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 208V112C576 85.5 554.5 64 528 64H48C21.5 64 0 85.5 0 112V208C26.5 208 48 229.5 48 256S26.5 304 0 304V400C0 426.5 21.5 448 48 448H528C554.5 448 576 426.5 576 400V304C549.5 304 528 282.5 528 256S549.5 208 576 208ZM512 256C512 285.768 532.428 310.852 560 317.975V400C560 417.645 545.645 432 528 432H48C30.355 432 16 417.645 16 400V317.975C43.574 310.852 64 285.768 64 256S43.574 201.146 16 194.025V112C16 94.355 30.355 80 48 80H528C545.645 80 560 94.355 560 112V194.025C532.428 201.146 512 226.232 512 256ZM448 144H128C119.164 144 112 151.164 112 160V352C112 360.836 119.164 368 128 368H448C456.838 368 464 360.836 464 352V160C464 151.164 456.838 144 448 144ZM448 352H128V160H448V352Z" })
  }
));
TicketThin.displayName = "TicketThin";
var Ticket_default = TicketThin;

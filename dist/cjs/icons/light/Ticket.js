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
const TicketLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 208V128C576 92.652 547.346 64 512 64H64C28.654 64 0 92.652 0 128V208C26.51 208 48 229.49 48 256S26.51 304 0 304V384C0 419.346 28.654 448 64 448H512C547.346 448 576 419.346 576 384V304C549.49 304 528 282.51 528 256S549.49 208 576 208ZM544 329.318V384C544 401.645 529.645 416 512 416H64C46.355 416 32 401.645 32 384V329.318C60.232 316.951 80 288.742 80 256S60.232 195.047 32 182.68V128C32 110.355 46.355 96 64 96H512C529.645 96 544 110.355 544 128V182.68C515.77 195.047 496 223.258 496 256S515.77 316.951 544 329.318ZM416 160H160C142.328 160 128 174.326 128 192V320C128 337.672 142.328 352 160 352H416C433.674 352 448 337.672 448 320V192C448 174.326 433.674 160 416 160ZM416 320H160V192H416V320Z" })
  }
));
TicketLight.displayName = "TicketLight";
var Ticket_default = TicketLight;

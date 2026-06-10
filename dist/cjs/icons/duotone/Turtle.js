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
var Turtle_exports = {};
__export(Turtle_exports, {
  default: () => Turtle_default
});
module.exports = __toCommonJS(Turtle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TurtleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M584.25 137.251L535.625 102.501C500.5 85.126 455.125 104.126 448.875 142.751C448.25 146.126 448 149.501 448 153.001V224.251C448 238.126 443.375 251.376 434.75 262.626C422.25 278.751 403.5 288.001 383 288.001H50.625C40.375 288.001 32 296.376 32 306.626C32 314.626 37.125 321.751 44.75 324.251L143 346.376L98.125 424.001C92 434.626 99.75 448.001 112 448.001H149C154.75 448.001 160 445.001 162.875 440.001L203.125 370.251C229.125 378.751 248.75 384.001 288 384.001C327.375 384.001 346.875 378.751 372.875 370.251L413.125 440.001C416 445.001 421.375 448.001 427 448.001H464C476.25 448.001 484 434.626 477.875 424.001L430.625 342.251C451.875 333.876 471 320.501 485.5 301.751C499.5 283.376 507.875 262.251 510.75 240.001H551.375C582.625 240.001 608 214.626 608 183.376C608 165.001 599.125 147.876 584.25 137.251ZM512 176.001C503.125 176.001 496 168.876 496 160.001S503.125 144.001 512 144.001S528 151.126 528 160.001S520.875 176.001 512 176.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383 288H96C78.327 288 64 273.673 64 256V224C64 135.635 160 64 256 64S448 135.635 448 224V224.25C448 238.125 443.375 251.375 434.75 262.625C422.25 278.75 403.5 288 383 288Z" })
    ]
  }
));
TurtleDuotone.displayName = "TurtleDuotone";
var Turtle_default = TurtleDuotone;

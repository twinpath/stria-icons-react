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
var Jug_exports = {};
__export(Jug_exports, {
  default: () => Jug_default
});
module.exports = __toCommonJS(Jug_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const JugThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 288H128C110.375 288 96 302.375 96 320V384C96 401.625 110.375 416 128 416H320C337.625 416 352 401.625 352 384V320C352 302.375 337.625 288 320 288ZM336 384C336 392.824 328.822 400 320 400H128C119.178 400 112 392.824 112 384V320C112 311.176 119.178 304 128 304H320C328.822 304 336 311.176 336 320V384ZM448 160C448 124.652 419.346 96 384 96C358.15 96 336.629 111.742 326.562 133.82L314.488 118.746C307.746 110.226 304 99.547 304 88.75V62.422C307.334 61.25 310.455 59.547 313 57C317.5 52.5 320 46.375 320 40V24C320 17.625 317.5 11.5 313 7S302.375 0 296 0H152C145.625 0 139.5 2.5 135 7S128 17.625 128 24V40C128 46.375 130.5 52.5 135 57C137.545 59.547 140.666 61.25 144 62.422V88.75C144 99.547 140.254 110.226 133.453 118.824L56.512 214.871C40.693 234.754 32 259.601 32 284.875V464C32 490.469 53.533 512 80 512H368C394.467 512 416 490.469 416 464V284.875C416 262.586 408.9 240.836 396.475 222.351C425.785 216.508 448 191.031 448 160ZM144 24C144 21.855 144.844 19.785 146.314 18.312C147.783 16.844 149.857 16 152 16H296C298.143 16 300.217 16.844 301.688 18.312C303.156 19.785 304 21.855 304 24V40C304 42.144 303.156 44.215 301.686 45.687C300.217 47.156 298.143 48 296 48H152C149.857 48 147.783 47.156 146.314 45.687C144.844 44.215 144 42.144 144 40V24ZM400 284.875V464C400 481.625 385.625 496 368 496H80C62.375 496 48 481.625 48 464V284.875C48 263.125 55.375 242 69 224.875L145.999 128.75C155 117.375 160 103.25 160 88.75V64H288V88.75C288 103.25 293 117.375 301.999 128.75L379 224.875C392.625 242 400 263.125 400 284.875ZM385.834 207.812L338.361 148.547C343.602 127.758 361.605 112 384 112C410.467 112 432 133.531 432 160C432 185.84 411.434 206.824 385.834 207.812Z" })
  }
));
JugThin.displayName = "JugThin";
var Jug_default = JugThin;

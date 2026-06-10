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
var InputNumeric_exports = {};
__export(InputNumeric_exports, {
  default: () => InputNumeric_default
});
module.exports = __toCommonJS(InputNumeric_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InputNumericThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.002 64H63.998C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 63.998 448H576.002C611.346 448 640 419.348 640 384V128C640 92.654 611.346 64 576.002 64ZM624 384C624 410.467 602.469 432 576.002 432H63.998C37.531 432 16 410.467 16 384V128C16 101.533 37.531 80 63.998 80H576.002C602.469 80 624 101.533 624 128V384ZM336 328H258.328L321.438 259.922C336.531 243.656 340.359 220.859 331.453 200.422C322.719 180.422 303.906 168 282.359 168C264.438 168 247.531 179.266 238.234 197.422C236.219 201.344 237.781 206.172 241.719 208.188C245.609 210.172 250.437 208.641 252.484 204.703C259.125 191.734 270.297 184 282.375 184C297.453 184 310.641 192.75 316.781 206.812C321.75 218.203 322.5 235.266 309.719 249.047L234.141 330.562C231.969 332.906 231.391 336.281 232.672 339.187C233.938 342.125 236.812 344 240 344H336C340.422 344 344 340.406 344 336S340.422 328 336 328ZM176 328H152V176C152 171.578 148.422 168 144 168H112C107.578 168 104 171.578 104 176S107.578 184 112 184H136V328H112C107.578 328 104 331.594 104 336S107.578 344 112 344H176C180.422 344 184 340.406 184 336S180.422 328 176 328Z" })
  }
));
InputNumericThin.displayName = "InputNumericThin";
var InputNumeric_default = InputNumericThin;

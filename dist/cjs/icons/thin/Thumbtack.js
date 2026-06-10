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
var Thumbtack_exports = {};
__export(Thumbtack_exports, {
  default: () => Thumbtack_default
});
module.exports = __toCommonJS(Thumbtack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ThumbtackThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M301.359 206.844L293.766 55.594C293.562 51.203 289.938 47.422 285.375 48.016C280.969 48.234 277.563 51.984 277.797 56.406L285.859 217.219L290.234 219.25C338.922 241.891 368 279.938 368 321C368 329.266 361.266 336 353 336H200V232C200 227.578 196.422 224 192 224S184 227.578 184 232V336H31C22.734 336 16 329.266 16 321C16 279.922 45.078 241.891 93.766 219.25L98.141 217.219L106.203 56.406C106.438 51.984 103.031 48.234 98.625 48.016C93.828 47.469 90.453 51.203 90.234 55.594L82.641 206.844C30.797 232.438 0 274.828 0 321C0 338.094 13.906 352 31 352H184V504C184 508.422 187.578 512 192 512S200 508.422 200 504V352H353C370.094 352 384 338.094 384 321C384 274.828 353.203 232.438 301.359 206.844ZM40 16H344C348.422 16 352 12.422 352 8S348.422 0 344 0H40C35.578 0 32 3.578 32 8S35.578 16 40 16Z" })
  }
));
ThumbtackThin.displayName = "ThumbtackThin";
var Thumbtack_default = ThumbtackThin;

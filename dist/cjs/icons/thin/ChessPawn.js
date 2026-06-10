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
var ChessPawn_exports = {};
__export(ChessPawn_exports, {
  default: () => ChessPawn_default
});
module.exports = __toCommonJS(ChessPawn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChessPawnThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M264 448H56C25.125 448 0 473.125 0 504C0 508.422 3.578 512 8 512S16 508.422 16 504C16 481.938 33.938 464 56 464H264C286.062 464 304 481.938 304 504C304 508.422 307.578 512 312 512S320 508.422 320 504C320 473.125 294.875 448 264 448ZM56 232C56 236.422 59.578 240 64 240H101.984L64.203 406.234C63.219 410.531 65.922 414.828 70.234 415.797C70.828 415.938 71.422 416 72 416C75.656 416 78.953 413.484 79.797 409.766L118.381 240H201.619L240.203 409.766C241.047 413.484 244.344 416 248 416C248.578 416 249.172 415.938 249.766 415.797C254.078 414.828 256.781 410.531 255.797 406.234L218.016 240H256C260.422 240 264 236.422 264 232S260.422 224 256 224H214.9C244.291 205.623 264 173.217 264 136C264 78.562 217.438 32 160 32S56 78.562 56 136C56 173.217 75.709 205.623 105.1 224H64C59.578 224 56 227.578 56 232ZM72 136C72 87.477 111.477 48 160 48S248 87.477 248 136S208.523 224 160 224S72 184.523 72 136Z" })
  }
));
ChessPawnThin.displayName = "ChessPawnThin";
var ChessPawn_default = ChessPawnThin;

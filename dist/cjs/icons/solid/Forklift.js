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
var Forklift_exports = {};
__export(Forklift_exports, {
  default: () => Forklift_default
});
module.exports = __toCommonJS(Forklift_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForkliftSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 384H544V32C544 14.4 529.6 0 512 0H512C494.4 0 480 14.4 480 32V432C480 440.8 487.2 448 496 448H608C625.6 448 640 433.6 640 416V416C640 398.4 625.6 384 608 384ZM416 237.125C416 228.375 414.25 219.875 410.75 211.875L332.5 29.125C324.875 11.375 307.625 0 288.25 0H144C117.5 0 96 21.5 96 48V160H48C21.5 160 0 181.5 0 208V416C0 469 43 512 96 512S192 469 192 416H256C256 469 299 512 352 512S448 469 448 416C448 387.75 435.5 362.5 416 344.875V237.125ZM96 464C69.5 464 48 442.5 48 416S69.5 368 96 368S144 389.5 144 416S122.5 464 96 464ZM256 256L160 160V64H277.75L352 237.125V256H256ZM352 464C325.5 464 304 442.5 304 416S325.5 368 352 368S400 389.5 400 416S378.5 464 352 464Z" })
  }
));
ForkliftSolid.displayName = "ForkliftSolid";
var Forklift_default = ForkliftSolid;

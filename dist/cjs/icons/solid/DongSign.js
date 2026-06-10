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
var DongSign_exports = {};
__export(DongSign_exports, {
  default: () => DongSign_default
});
module.exports = __toCommonJS(DongSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DongSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 400C216.512 400 239.215 392.727 258.697 380.73C263.627 392.055 274.863 400 288 400C305.672 400 320 385.688 320 368V112H328C341.25 112 352 101.25 352 88S341.25 64 328 64H320C320 46.312 305.672 32 288 32S256 46.312 256 64H216C202.75 64 192 74.75 192 88S202.75 112 216 112H256V161.803C237.096 150.779 215.416 144 192 144C121.422 144 64 201.406 64 272S121.422 400 192 400ZM192 224C218.469 224 240 245.531 240 272S218.469 320 192 320S144 298.469 144 272S165.531 224 192 224ZM360 432H24C10.75 432 0 442.75 0 456S10.75 480 24 480H360C373.25 480 384 469.25 384 456S373.25 432 360 432Z" })
  }
));
DongSignSolid.displayName = "DongSignSolid";
var DongSign_default = DongSignSolid;

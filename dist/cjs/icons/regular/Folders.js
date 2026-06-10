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
var Folders_exports = {};
__export(Folders_exports, {
  default: () => Folders_default
});
module.exports = __toCommonJS(Folders_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FoldersRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 400V160C53.49 160 32 181.492 32 208V416C32 451.344 60.654 480 96 480H464C490.51 480 512 458.508 512 432H112C94.326 432 80 417.672 80 400ZM544 96H403.883L354.746 50.746C342.742 38.742 326.465 32 309.49 32H192C156.654 32 128 60.656 128 96V320C128 355.344 156.654 384 192 384H544C579.346 384 608 355.344 608 320V160C608 124.656 579.346 96 544 96ZM560 320C560 328.824 552.822 336 544 336H192C183.178 336 176 328.824 176 320V96C176 87.176 183.178 80 192 80H309.49C313.764 80 317.783 81.664 320.805 84.688L384 144H544C552.822 144 560 151.176 560 160V320Z" })
  }
));
FoldersRegular.displayName = "FoldersRegular";
var Folders_default = FoldersRegular;

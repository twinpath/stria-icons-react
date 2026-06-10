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
var FolderImage_exports = {};
__export(FolderImage_exports, {
  default: () => FolderImage_default
});
module.exports = __toCommonJS(FolderImage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderImageRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96H275.883L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H448C483.346 480 512 451.344 512 416V160C512 124.656 483.346 96 448 96ZM464 416C464 424.824 456.822 432 448 432H64C55.178 432 48 424.824 48 416V96C48 87.176 55.178 80 64 80H181.49C185.764 80 189.783 81.664 192.805 84.688L256 144H448C456.822 144 464 151.176 464 160V416ZM127.986 240C145.66 240 159.986 225.672 159.986 208S145.66 176 127.986 176S95.986 190.328 95.986 208S110.312 240 127.986 240ZM306.646 215.125C303.68 210.672 298.684 208 293.334 208S282.988 210.672 280.021 215.125L217.283 309.234L194.928 278.574C191.916 274.441 187.111 272 182 272C176.889 272 172.084 274.441 169.072 278.574L99.072 374.574C95.523 379.437 95.008 385.883 97.738 391.25C100.467 396.621 105.979 400 112 400H400C405.9 400 411.322 396.754 414.107 391.551C416.891 386.348 416.586 380.035 413.312 375.125L306.646 215.125Z" })
  }
));
FolderImageRegular.displayName = "FolderImageRegular";
var FolderImage_default = FolderImageRegular;

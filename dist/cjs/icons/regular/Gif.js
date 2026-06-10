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
var Gif_exports = {};
__export(Gif_exports, {
  default: () => Gif_default
});
module.exports = __toCommonJS(Gif_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GifRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM528 416C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H512C520.822 80 528 87.178 528 96V416ZM464 164H376C364.953 164 356 172.953 356 184V328C356 339.047 364.953 348 376 348S396 339.047 396 328V276H448C459.047 276 468 267.047 468 256S459.047 236 448 236H396V204H464C475.047 204 484 195.047 484 184S475.047 164 464 164ZM304 164C292.953 164 284 172.953 284 184V328C284 339.047 292.953 348 304 348S324 339.047 324 328V184C324 172.953 315.047 164 304 164ZM240 244H182.828C171.781 244 162.828 252.953 162.828 264S171.781 284 182.828 284H220V297.734C199.531 312.406 164.797 310.344 147.234 292.766C137.406 282.938 132 269.891 132 256S137.406 229.062 147.234 219.234C166.891 199.562 199.938 199.562 219.594 219.234C227.391 227.047 240.047 227.047 247.875 219.234C255.688 211.438 255.688 198.766 247.875 190.953C213.125 156.203 153.703 156.172 118.953 190.953C101.578 208.328 92 231.422 92 256S101.578 303.672 118.953 321.047C136.062 338.172 160.703 348 186.547 348C212.375 348 237.016 338.172 254.141 321.047C257.891 317.297 260 312.203 260 306.906V264C260 252.953 251.047 244 240 244Z" })
  }
));
GifRegular.displayName = "GifRegular";
var Gif_default = GifRegular;

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
var FileMusic_exports = {};
__export(FileMusic_exports, {
  default: () => FileMusic_default
});
module.exports = __toCommonJS(FileMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileMusicDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM288 384C288 401.625 266.5 416 240 416S192 401.625 192 384S213.5 352 240 352C245.375 352 250.75 352.75 256 354.001V277.625L160 315.125V416C160 433.625 138.5 448 112 448S64 433.625 64 416S85.5 384 112 384C117.375 384 122.75 384.75 128 386.001V271.25C128 264.25 132.5 258.125 139.25 256L267.25 208.75C272 207.25 277.375 208.125 281.5 211.125S288 218.875 288 224V384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0V128H384L256 0ZM267.25 208.75L139.25 256C132.5 258.125 128 264.25 128 271.25V386C122.75 384.75 117.375 384 112 384C85.5 384 64 398.375 64 416S85.5 448 112 448S160 433.625 160 416V315.125L256 277.625V354C250.75 352.75 245.375 352 240 352C213.5 352 192 366.375 192 384S213.5 416 240 416S288 401.625 288 384V224C288 218.875 285.625 214.125 281.5 211.125S272 207.25 267.25 208.75Z" })
    ]
  }
));
FileMusicDuotone.displayName = "FileMusicDuotone";
var FileMusic_default = FileMusicDuotone;

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
const FolderImageDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM127.984 192C145.66 192 159.984 206.328 159.984 224S145.66 256 127.984 256C110.312 256 95.984 241.672 95.984 224S110.312 192 127.984 192ZM414.109 407.551C411.32 412.754 405.898 416 400 416H112C105.977 416 100.469 412.621 97.738 407.25C95.008 401.883 95.523 395.438 99.07 390.574L169.07 294.574C172.086 290.441 176.891 288 182 288C187.109 288 191.914 290.441 194.93 294.574L217.281 325.234L280.023 231.125C282.988 226.672 287.984 224 293.336 224C298.684 224 303.68 226.672 306.648 231.125L413.312 391.125C416.586 396.035 416.891 402.348 414.109 407.551Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M414.11 407.551C411.321 412.754 405.899 416 400.001 416H112.001C105.977 416 100.469 412.621 97.739 407.25C95.008 401.883 95.524 395.438 99.071 390.574L169.071 294.574C172.087 290.441 176.891 288 182.001 288C187.11 288 191.915 290.441 194.93 294.574L217.282 325.234L280.024 231.125C282.989 226.672 287.985 224 293.337 224C298.684 224 303.68 226.672 306.649 231.125L413.313 391.125C416.587 396.035 416.891 402.348 414.11 407.551Z" })
    ]
  }
));
FolderImageDuotone.displayName = "FolderImageDuotone";
var FolderImage_default = FolderImageDuotone;

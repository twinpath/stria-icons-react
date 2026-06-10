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
var CommentMusic_exports = {};
__export(CommentMusic_exports, {
  default: () => CommentMusic_default
});
module.exports = __toCommonJS(CommentMusic_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentMusicRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.943 32C114.568 32 0.068 125.125 0.068 240C0.068 287.625 19.943 331.25 52.943 366.25C38.068 405.75 7.068 439.125 6.568 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.693 474.25 14.443 480 23.943 480C85.443 480 133.943 454.25 163.068 433.75C193.068 443.125 224.443 448 255.943 448C397.318 448 511.943 354.875 511.943 240S397.318 32 255.943 32ZM255.943 400C229.318 400 202.943 395.875 177.568 387.875L154.943 380.75L135.443 394.5C117.818 407 98.443 416.75 77.943 423.5C85.818 410.75 92.443 397.25 97.818 383.25L108.443 355.25L87.818 333.375C69.693 314.125 47.943 282.25 47.943 240C47.943 151.75 141.318 80 255.943 80C370.693 80 463.943 151.75 463.943 240S370.693 400 255.943 400ZM331.068 128.75L203.193 176C196.443 178.125 191.943 184.25 191.943 191.25V290C186.693 288.75 181.318 288 175.943 288C149.443 288 127.943 302.375 127.943 320S149.443 352 175.943 352S223.943 337.625 223.943 320V235.125L319.943 197.625V258C314.693 256.75 309.318 256 303.943 256C277.443 256 255.943 270.375 255.943 288S277.443 320 303.943 320S351.943 305.625 351.943 288V144C351.943 138.875 349.568 134.125 345.443 131.125S336.068 127.25 331.193 128.75H331.068Z" })
  }
));
CommentMusicRegular.displayName = "CommentMusicRegular";
var CommentMusic_default = CommentMusicRegular;

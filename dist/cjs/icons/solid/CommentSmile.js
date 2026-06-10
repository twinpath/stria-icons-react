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
var CommentSmile_exports = {};
__export(CommentSmile_exports, {
  default: () => CommentSmile_default
});
module.exports = __toCommonJS(CommentSmile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentSmileSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C2 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM319.965 144C337.713 144 351.961 158.25 351.961 176S337.713 208 319.965 208S287.969 193.75 287.969 176S302.217 144 319.965 144ZM191.982 144C209.73 144 223.979 158.25 223.979 176S209.73 208 191.982 208S159.986 193.75 159.986 176S174.234 144 191.982 144ZM362.209 303.25C335.713 334.25 297.094 352 255.973 352C214.854 352 176.234 334.25 149.738 303.25C141.238 293.25 142.238 278.125 152.363 269.5C162.361 261 177.609 262.125 186.232 272.25C203.48 292.375 228.852 304 255.973 304C283.096 304 308.467 292.375 325.715 272.25C334.338 262.125 349.461 260.875 359.459 269.5C369.584 278.125 370.709 293.25 362.209 303.25Z" })
  }
));
CommentSmileSolid.displayName = "CommentSmileSolid";
var CommentSmile_default = CommentSmileSolid;

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
var CommentCaptions_exports = {};
__export(CommentCaptions_exports, {
  default: () => CommentCaptions_default
});
module.exports = __toCommonJS(CommentCaptions_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentCaptionsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.034 32C114.678 32 0.068 125.125 0.068 240C0.068 287.625 19.94 331.25 52.936 366.25C38.063 405.75 7.067 439.125 6.567 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.817 474.25 14.441 480 24.065 480C85.557 480 134.05 454.25 163.171 433.75C192.043 442.75 223.288 448 256.034 448C397.39 448 512 354.875 512 240S397.39 32 256.034 32ZM256.034 400C229.288 400 202.916 395.875 177.669 387.875L154.923 380.75L135.425 394.5C121.177 404.625 101.555 415.875 77.933 423.5C85.307 411.375 92.306 397.75 97.805 383.25L108.429 355.25L87.806 333.375C69.809 314.125 48.062 282.25 48.062 240C48.062 151.75 141.299 80 256.034 80S464.006 151.75 464.006 240S370.769 400 256.034 400ZM239.968 216C239.968 202.75 229.219 192 215.971 192H119.984C106.736 192 95.987 202.75 95.987 216S106.736 240 119.984 240H215.971C229.219 240 239.968 229.25 239.968 216ZM295.96 272H215.971C202.723 272 191.974 282.75 191.974 296S202.723 320 215.971 320H295.96C309.209 320 319.957 309.25 319.957 296S309.209 272 295.96 272ZM135.982 272H119.984C106.736 272 95.987 282.75 95.987 296S106.736 320 119.984 320H135.982C149.23 320 159.978 309.25 159.978 296S149.23 272 135.982 272ZM391.948 272H375.95C362.702 272 351.953 282.75 351.953 296S362.702 320 375.95 320H391.948C405.196 320 415.944 309.25 415.944 296S405.196 272 391.948 272ZM391.948 192H295.96C282.712 192 271.964 202.75 271.964 216S282.712 240 295.96 240H391.948C405.196 240 415.944 229.25 415.944 216S405.196 192 391.948 192Z" })
  }
));
CommentCaptionsRegular.displayName = "CommentCaptionsRegular";
var CommentCaptions_default = CommentCaptionsRegular;

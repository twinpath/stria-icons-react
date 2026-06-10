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
var FileSignature_exports = {};
__export(FileSignature_exports, {
  default: () => FileSignature_default
});
module.exports = __toCommonJS(FileSignature_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileSignatureLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560.875 136L536 111.125C515.75 90.875 483 90.875 462.75 111.125L303.5 269.75C273.375 299.75 256.125 341.25 256 383.75C252.125 383.5 248.5 381.375 246.625 377.5C234.75 353.625 200.375 347.125 180.625 363.375L166.75 321.75C163.5 311.875 154.375 305.25 144 305.25S124.5 311.875 121.25 321.75L103 376.375C101.5 381 97.25 384 92.375 384H80C71.125 384 64 391.125 64 400S71.125 416 80 416H92.375C111 416 127.5 404.125 133.375 386.5L144 354.625L160.75 405C165.375 418.625 184 419.875 190.25 407.125L197.999 391.75C201.999 383.75 213.75 383.25 218.25 392.125C225.5 406.625 239.875 415.75 256 416H288C354.838 416 400.955 369.697 402.125 368.5L560.875 209.25C570.625 199.5 576 186.375 576 172.625C576 158.75 570.625 145.75 560.875 136ZM379.5 346.001C355.25 370.25 322.375 384 288 384C288 349.625 301.75 316.625 325.999 292.5L446.625 172.625L499.375 225.375L379.5 346.001ZM538.25 186.625L517 207.75L464.25 155L485.375 133.75C493.125 126.125 505.625 126.001 513.375 133.75L538.25 158.625C545.875 166.375 545.875 178.875 538.25 186.625ZM364.422 448C357.793 448 351.32 451.795 349.223 458.104C344.996 470.812 333.025 480 318.955 480H63.791C46.176 480 31.896 465.674 31.896 448V64C31.896 46.326 46.176 32 63.791 32H191.373V144C191.373 170.51 212.795 192 239.217 192H303.291C311.943 192 318.955 184.963 318.955 176.283V175.717C318.955 167.037 311.943 160 303.291 160H239.217C230.41 160 223.27 152.836 223.27 144V34.076C227.73 35.643 231.906 37.922 235.35 41.375L325.195 131.514C331.312 137.652 341.232 137.652 347.35 131.514L347.748 131.113C353.865 124.975 353.865 115.025 347.748 108.887L257.9 18.746C245.938 6.742 229.713 0 212.793 0H63.791C28.561 0 0 28.654 0 64V448C0 483.346 28.561 512 63.791 512H318.955C347.154 512 371.078 493.645 379.506 468.195C382.807 458.23 374.887 448 364.422 448Z" })
  }
));
FileSignatureLight.displayName = "FileSignatureLight";
var FileSignature_default = FileSignatureLight;

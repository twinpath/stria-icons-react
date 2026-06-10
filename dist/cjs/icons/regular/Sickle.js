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
var Sickle_exports = {};
__export(Sickle_exports, {
  default: () => Sickle_default
});
module.exports = __toCommonJS(Sickle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SickleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M129.936 308.742C123.68 302.492 113.446 302.5 107.194 308.75L84.694 331.25C78.444 337.5 78.444 347.75 84.694 354L87.319 356.75L9.374 434.75C-3.125 447.25 -3.125 467.508 9.374 480.008L31.995 502.625C44.493 515.125 64.756 515.125 77.252 502.625L155.321 424.5L158.071 427.25C164.323 433.5 174.448 433.5 180.698 427.25L203.323 404.625C209.575 398.375 209.571 388.234 203.315 381.992L129.936 308.742ZM511.397 153.719C500.694 100.562 446.536 0 318.192 0C228.127 0 151.534 61.656 131.956 149.906C118.659 209.625 140.299 275.969 188.893 323.531L216.971 349.594C221.581 353.875 227.44 356 233.299 356C239.362 356 245.424 353.719 250.096 349.156L281.379 318.531C289.364 310.688 290.895 298.375 285.051 288.844C255.674 240.875 270.129 182.125 318.661 152.156C349.645 132.969 390.161 131.875 422.036 149.375C435.317 156.594 447.098 166.687 456.145 178.594C464.911 190.187 480.364 194.094 493.631 188.125C506.928 182.156 514.225 168.031 511.397 153.719ZM293.426 111.344C228.534 151.375 205.002 229.875 235.034 296.719L232.862 298.844L222.018 288.781C185.643 253.188 169.096 203.969 178.815 160.312C190.815 106.219 239.549 48 318.192 48C377.973 48 414.067 74.719 435.426 102.438C390.395 81.875 335.786 85.094 293.426 111.344Z" })
  }
));
SickleRegular.displayName = "SickleRegular";
var Sickle_default = SickleRegular;

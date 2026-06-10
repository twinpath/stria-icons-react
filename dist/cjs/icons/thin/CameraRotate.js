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
var CameraRotate_exports = {};
__export(CameraRotate_exports, {
  default: () => CameraRotate_default
});
module.exports = __toCommonJS(CameraRotate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraRotateThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H376L363.625 63.125C356.625 44.375 338.75 32 318.75 32H193.25C173.25 32 155.25 44.375 148.25 63.125L136 96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V144C16 126.355 30.355 112 48 112H147.113L163.238 68.721C167.867 56.326 179.926 48 193.25 48H318.75C332 48 344.008 56.326 348.652 68.762L364.926 112H464C481.645 112 496 126.355 496 144V432ZM352 184C347.578 184 344 187.578 344 192V230.279C324.148 201.975 291.436 184 256 184C211.719 184 171.328 211.781 155.516 253.141C153.938 257.266 156 261.891 160.125 263.469C164.25 265.031 168.875 262.984 170.453 258.859C183.922 223.656 218.297 200 256 200C289.652 200 320.545 218.918 336.395 248H288C283.578 248 280 251.578 280 256S283.578 264 288 264H352C356.422 264 360 260.422 360 256V192C360 187.578 356.422 184 352 184ZM351.875 312.531C347.813 311 343.141 313.016 341.547 317.141C328.078 352.344 293.703 376 256 376C222.348 376 191.455 357.082 175.605 328H224C228.422 328 232 324.422 232 320S228.422 312 224 312H160C155.578 312 152 315.578 152 320V384C152 388.422 155.578 392 160 392S168 388.422 168 384V345.721C187.852 374.025 220.564 392 256 392C300.281 392 340.672 364.219 356.484 322.859C358.062 318.734 356 314.109 351.875 312.531Z" })
  }
));
CameraRotateThin.displayName = "CameraRotateThin";
var CameraRotate_default = CameraRotateThin;
